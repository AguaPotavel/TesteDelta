import react, { useState, createRef, useEffect } from "react";
import { Image } from "react-native";
import { useModal } from "../../contexts/useModal";

import { PrimaryButton } from "../../components/Buttons";

import { ModalConfirmation } from "./subComponents/ModalConfirmation";
import { InputTextComponent } from "../../components/InputText";
import { Container, StudentPhotoArea, ImagePlaceholder } from "./styles";
import {
  createStudent,
  uploadPhoto,
  getStudentPhoto,
  updateStudent,
} from "../../services/api";
import { useTheme } from "styled-components";
// import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import config from "../../config";

export default function Student({ route, navigation }) {
  const theme = useTheme();
  const { setShowModal, setComponentModal, setIsLoading } = useModal();
  const { student } = route.params;
  const [username, setUsername] = useState(student?.username || "");
  const [address, setAddress] = useState(student?.address || "");
  const [photoIsChanged, setPhotoIsChanged] = useState(false);
  const [photo, setPhoto] = useState({
    uri: `image_1654134937161.jpg`,
  });
  const refInputUsername = createRef();
  const refInputAddress = createRef();

  const handleCloseModal = () => {
    setShowModal(false);
    setIsLoading(false);
    setComponentModal(null);
  };

  const loadImage = async () => {
    if (student !== undefined) {
      setShowModal(true);
      setIsLoading(true);
      const response = await getStudentPhoto(student.id);
      setShowModal(false);
      setIsLoading(false);
      if (response.status === 200) {
        
        setPhoto({
          uri: `http://${config.BASE_URL}/static/images/${response.data.image}`,
        });
      }
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

  useEffect(() => {
    // loadImage();
    // console.log(photo);
  }, [photo]);

  const handleOpenModalStudent = () => {
    setIsLoading(true);
    setShowModal(true);
    refInputUsername.current.blur();
    refInputAddress.current.blur();
    setTimeout(() => {
      setIsLoading(false);
      setComponentModal(
        <ModalConfirmation
          onClose={handleCloseModal}
          onConfirm={() => {
            handleCreateUpdateStudent();
            handleCloseModal();
          }}
          header={student !== undefined ? "Atualizar Aluno" : "Criar Aluno"}
          title={student !== undefined ? "Confirmar" : "Confirmar"}
          text={
            student !== undefined
              ? "você está prestes a atualizar os dados, está operação não poderá ser desfeita, prosseguir?"
              : "você está prestes a criar um aluno no sistema, prosseguir?"
          }
        />
      );
    }, 2000);
  };

  const upPhoto = async (dataFull) => {
    const { data } = dataFull;
    const response = await uploadPhoto(data.user.id, photo);
    if (response.status === 200) {
      return true;
    }
    return false;
  };

  const handleCreateUpdateStudent = async () => {
    setIsLoading(true);
    const data = {
      username,
      address,
    };

    let response;

    if (student !== undefined) {
      response = await updateStudent({id: student.id, ...data});
    } else{
      response = await createStudent(data);
    }

    if (response !== {}) {
      setIsLoading(false);
      if (photo !== {} && photoIsChanged) {
        console.log("uploading photo");
        await upPhoto(response);
        setPhotoIsChanged(false);
      }
    }
    
    setIsLoading(false);
    navigation.navigate("Home", {reload: true});
  };

  const handleSelectPhoto = async () => {
    console.log("select photo");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhotoIsChanged(true);
      setPhoto(result);
    }
  };

  return (
    <Container>
      <StudentPhotoArea onPress={handleSelectPhoto}>
        {photo !== {} ? (
          <Image
            source={{ uri: photo.uri }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        ) : (
          <ImagePlaceholder color={theme.colors.background_hard} />
        )}
      </StudentPhotoArea>
      <InputTextComponent
        placeholder={"Nome"}
        iconName={"user"}
        value={username}
        onChangeText={(text) => setUsername(text)}
        ref={refInputUsername}
      />
      <InputTextComponent
        placeholder={"Endereço"}
        iconName={"map"}
        value={address}
        onChangeText={(text) => setAddress(text)}
        ref={refInputAddress}
      />
      <PrimaryButton
        onPress={handleOpenModalStudent}
        text={student !== undefined ? "Atualizar" : "Criar"}
      />
    </Container>
  );
}
