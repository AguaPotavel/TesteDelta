import styled from "styled-components/native";

export const ModalWrapper = styled.View`
    display: flex;
    width: ${({width}) => width}px;
    height: ${({height}) => height + 100}px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const OutArea = styled.Pressable`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const Content = styled.View`
    display: flex;
    width: 80%;
    height: 500px;
    border-radius: 10px;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    z-index: 99;
`;