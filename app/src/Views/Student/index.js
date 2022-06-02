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
} from "../../services/api";
import { useTheme } from "styled-components";
// import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

export default function Student({ route, navigation }) {
  const theme = useTheme();
  const { setShowModal, setComponentModal, setIsLoading } = useModal();
  const { student } = route.params;
  const [username, setUsername] = useState(student?.username || "");
  const [address, setAddress] = useState(student?.address || "");
  const [photo, setPhoto] = useState({
    uri: "https://i.imgur.com/HepaLlN.jpeg",
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
        console.log(response.data.image);
        setPhoto({
          uri: `http://192.168.100.7:3000/static/images/${response.data.image}`,
        });
      }
    }
  };

  useEffect(() => {
    // loadImage();
  }, []);

  useEffect(() => {
    // loadImage();
    console.log(photo);
  }, [photo]);

  const handleOpenModal = () => {
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
            handleCloseModal();
            handleCreateStudent();
          }}
          header={student !== undefined ? "Atualizar Aluno" : "Criar Aluno"}
          title={student !== undefined ? "Confirmar" : "Confirma "}
          text={
            student !== undefined
              ? "você está prestes a atualizar os dados, está operação não poderá ser desfeita, prosseguir?"
              : "você está prestes a criar um aluno no sistema, prosseguir?"
          }
        />
      );
    }, 2000);
  };

  const upPhoto = async (data) => {
    const response = await uploadPhoto(data.user.id, photo);
    if (response.status === 200) {
      return true;
    }
    return false;
  };

  const handleCreateStudent = async () => {
    setIsLoading(true);
    const data = {
      username,
      address,
    };

    const response = await createStudent(data);
    if (response !== {}) {
      setIsLoading(false);
      if (photo !== {}) {
        await upPhoto(response);
      }
    }
    // console.log(response);
    setIsLoading(false);
    navigation.navigate("Home");
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
        onPress={handleOpenModal}
        text={student !== undefined ? "Atualizar" : "Criar"}
      />
    </Container>
  );
}
