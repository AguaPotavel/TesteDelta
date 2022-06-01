import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

export const InputTextWrapper = styled.View`
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 10px 0px;
`;

export const InputText = styled.TextInput`
    flex: 1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background_hard};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    padding: 10px;
    margin: 5px 5px 5px 0px;
    font-size: ${RFValue(20)}px;
`;

export const InputTextIcon = styled(Feather).attrs({
    size: 24,
})`

`