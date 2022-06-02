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

export const StudentItemComponent = ({ navigation, data }) => {
  const { colors } = useTheme();
  const { item } = data;

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
        <ActionButton onPress={() => console.log("teste")}>
          <ActionButtonIcon name="trash" color={colors.primary} />
        </ActionButton>
      </ActionContainer>
    </StudentItem>
  );
};
