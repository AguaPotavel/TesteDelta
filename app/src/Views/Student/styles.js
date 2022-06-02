import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const StudentPhotoArea = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  overflow: hidden;
`;

export const ImagePlaceholder = styled(Feather).attrs({
  name: "user",
  size: 100,
})``;
