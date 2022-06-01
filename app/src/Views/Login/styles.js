import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
`;