import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './src/contexts/useModal';
import Routes from './src/routes'
import Theme from './src/styles/theme';
import { Dimensions } from 'react-native';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

const AppWrapper = styled.View`
  display: flex;
  /* flex: 1; */
  width: ${width}px;
  height: ${100}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ModalProvider>
        {/* <AppWrapper> */}
          <StatusBar style="light" />
          <Routes />
        {/* </AppWrapper> */}
      </ModalProvider>
    </ThemeProvider>
  );
}
