import react, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useModal } from "../../contexts/useModal";

import { PrimaryButton } from "../../components/Buttons";

import { ModalConfirmation } from "./subComponents/ModalConfirmation";
import { InputTextComponent } from "../../components/InputText";
import { StudentItemComponent } from "./subComponents/StudentItem";
import { Container, TitlePage, ButtonsArea } from "./styles";

import { getStudents } from "../../services/api";

const DATA = [
  {
    id: 1,
    name: "Student 1",
    end: "End 1",
    imgSrc: "https://picsum.photos/200/300",
  },
];

export default function Home({ navigation }) {
  const { setShowModal, setComponentModal, setIsLoading } = useModal();
  const [studentsList, setStudentsList] = useState([]);

  const handleAddNewStudent = () => {
    navigation.navigate("Student", {});
  };

  useEffect(() => {
    async function fetchStudents() {
      setIsLoading(true);
      const response = await getStudents();
      
      if(response.status !== 200) return;

      const { students } = response.data;
      
      setIsLoading(false);
      setStudentsList(students);
    }

    fetchStudents();
  }, []);

  return (
    <Container>
      <TitlePage>Lista de Alunos</TitlePage>
      <ButtonsArea>
        <PrimaryButton onPress={handleAddNewStudent} text={"Adicionar"} />
      </ButtonsArea>
      <FlatList
        style={{ width: "100%", paddingVertical: 10 }}
        data={studentsList}
        renderItem={(item) => (
          <StudentItemComponent navigation={navigation} data={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
