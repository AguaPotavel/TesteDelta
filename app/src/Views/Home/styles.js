import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: flex-start;
    justify-content: flex-start;
`;



export const TitlePage = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${RFValue(25)}px;
    font-weight: bold;
    margin: 10px 0px;
`;

export const ButtonsArea = styled.View`
    width: 30%;
    height: 100px;
    margin: 5px 0px;
`;