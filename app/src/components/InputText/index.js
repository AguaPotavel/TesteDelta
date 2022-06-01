import react, { useRef, useState, Memo } from "react";
import { useTheme } from 'styled-components';

import {
    InputTextWrapper,
    InputText,
    InputTextIcon,
} from './styles'

import {
    IconWrapper,
} from './Animations'

export const InputTextComponent = ({ placeholder, iconName }) => {
    const inputRef = useRef(null);
    const [ isFocused, setIsFocused ] = useState(false);
    const [value, setValue] = useState("");
    const theme = useTheme();

    const handleChangeText = (text) => {
        setValue(text);
    };

    const handleSubmitEditing = () => {
        inputRef.current.focus();
    };

    return (
        <InputTextWrapper>
            <IconWrapper show={isFocused}>
                <InputTextIcon name={iconName} color={ isFocused? theme.colors.background : theme.colors.text}/>
            </IconWrapper>
            <InputText
                ref={inputRef}
                value={value}
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmitEditing}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputTextWrapper>
    );
}