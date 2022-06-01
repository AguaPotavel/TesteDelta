import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const StudentItem = styled.View.attrs({
    elevation: 5,
})`
    align-self: center;
    width: 98%;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 10px;
    border-radius: 10px;
    /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
`;

export const StudentItemText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
`;

export const InformationsContainer = styled.View`
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    margin-left: 10px;
`;

export const InformationItem = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
`;

export const Value = styled(Label)`
    font-size: ${RFValue(16)}px;
    font-weight: normal;
`;

export const ActionContainer = styled.View`
    flex: 1;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* width: 60px; */
`;

export const ActionButtonWrapper = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ActionButton = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: red;
    border-radius: 50px;
`;

export const ActionButtonIcon = styled(Feather).attrs({
    size: 20,
})``;