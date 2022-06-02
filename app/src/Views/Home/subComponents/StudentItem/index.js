import react from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import {
  StudentItem,
  Label,
  Value,
  InformationsContainer,
  InformationItem,
  ActionContainer,
  ActionButtonWrapper,
  ActionButton,
  ActionButtonIcon,
} from "./styles";

import { deleteStudent } from "../../../../services/api";
import { useModal } from "../../../../contexts/useModal";

export const StudentItemComponent = ({ navigation, data }) => {
  const { colors } = useTheme();
  const { item } = data;
  const { setShowModal, setIsLoading } = useModal();

  const handleDeleteStudent = async () => {
    setIsLoading(true);
    setShowModal(true);
    const response = await deleteStudent(item.id);

    if (response.status !== 200) {
      setIsLoading(false);
      setShowModal(false);
      return;
    }

    setIsLoading(false);
    setShowModal(false);
    navigation.navigate("Home");
  }



  return (
    <StudentItem>
      <InformationsContainer>
        <InformationItem>
          <Label>Nome:</Label>
          <Value>{item.username}</Value>
        </InformationItem>

        <InformationItem>
          <Label>Endereço:</Label>
          <Value>{item.address}</Value>
        </InformationItem>
      </InformationsContainer>
      <ActionContainer>
        <ActionButton
          onPress={() =>
            navigation.navigate("Student", {
              student: item,
            })
          }
        >
          <ActionButtonIcon name="edit" color={colors.primary} />
        </ActionButton>
        <ActionButton onPress={handleDeleteStudent}>
          <ActionButtonIcon name="trash" color={colors.primary} />
        </ActionButton>
      </ActionContainer>
    </StudentItem>
  );
};
