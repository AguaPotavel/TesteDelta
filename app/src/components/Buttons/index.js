import react from "react";
import {
    ButtonWrapper,
    ButtonText,
} from './styles';

export const PrimaryButton = ({ text, onPress }) => {
    return (
        <ButtonWrapper onPress={onPress} isPrimary>
            <ButtonText isPrimary>{text}</ButtonText>
        </ButtonWrapper>
    );
}

export const SecondaryButton = ({ text, onPress }) => {
    return (
        <ButtonWrapper onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </ButtonWrapper>
    );
}