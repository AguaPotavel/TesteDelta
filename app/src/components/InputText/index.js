import react, { useRef, useState, forwardRef } from "react";
import { useTheme } from "styled-components";

import { InputTextWrapper, InputText, InputTextIcon } from "./styles";

import { IconWrapper } from "./Animations";

export const InputTextComponent = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const { placeholder, iconName, value, onChangeText } = props;
  // console.log(props);

  // const handleChangeText = (text) => {
  //     setValue(text);
  // };

  // const handleSubmitEditing = () => {
  //     inputRef.current.focus();
  // };

  return (
    <InputTextWrapper>
      <IconWrapper show={isFocused}>
        <InputTextIcon
          name={iconName}
          color={isFocused ? theme.colors.background : theme.colors.text}
        />
      </IconWrapper>
      <InputText
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        // onSubmitEditing={handleSubmitEditing}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputTextWrapper>
  );
});
