import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonWrapper = styled.Pressable`
    /* padding: 0px ${RFValue(10)}px; */
    width: 100%;

    /* min-width: 150px; */
    height: 70px;
    background-color: ${({ theme, isPrimary }) => isPrimary? theme.colors.primary: 'transparent'};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
`;

export const ButtonText = styled.Text`
    color: ${({ theme, isPrimary }) => isPrimary? '#fff': theme.colors.primary};
    font-size: ${RFValue(18)}px;
    font-weight: bold;
`;