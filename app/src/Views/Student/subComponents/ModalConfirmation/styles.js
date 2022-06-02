import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

export const ModalWrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const ModalHeader = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 10px 0px;
`;

export const ModalHeaderText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: bold;
`;

export const CloseModalButton = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const CloseModalButtonWrapper = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

export const IconClose = styled(Feather).attrs({
    name: 'x',
    size: 24,
    color: '#fff',
})`
    /* color: ${({ theme }) => theme.colors.white}; */
`;


export const ModalContent = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
`;

export const ModalContentText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    margin-top: 20px;  
`;

export const ModalContentTitle = styled(ModalContentText)`
    font-size: 24px;
    font-weight: bold;
`;

export const ModalFooter = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    margin: 10px 0px;
`;

export const ModalFooterItem = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
`;