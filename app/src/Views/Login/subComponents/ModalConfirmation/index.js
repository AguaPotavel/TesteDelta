import react from "react";
import {
    ModalWrapper,
    ModalHeader,
    CloseModalButton,
    IconClose,
    ModalHeaderText,
    CloseModalButtonWrapper,
    ModalContent,
    ModalContentText,
    ModalContentTitle,
    ModalFooter,
    ModalFooterItem,
} from './styles'

import {
    PrimaryButton,
    SecondaryButton,
} from '../../../../components/Buttons'

export const ModalConfirmation = ({ onClose, header, title, text, onConfirm }) => {

    const handleConfirmAction = () => {
        onConfirm()
        onClose()
    }


    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalHeaderText>
                    {header}
                </ModalHeaderText>
                <CloseModalButtonWrapper>
                    <CloseModalButton onPress={onClose}>
                        <IconClose />
                    </CloseModalButton>
                </CloseModalButtonWrapper>
            </ModalHeader>


            <ModalContent>
                <ModalContentTitle>
                    {title}
                </ModalContentTitle>
                <ModalContentText>
                    {text}
                </ModalContentText>
            </ModalContent>


            <ModalFooter>
                <ModalFooterItem>
                    <PrimaryButton onPress={handleConfirmAction} text={'Sim'} />
                </ModalFooterItem>
                
                <ModalFooterItem>
                    <SecondaryButton text={'Cancelar'} onPress={onClose} />
                </ModalFooterItem>
            </ModalFooter>
        </ModalWrapper>
    );
}