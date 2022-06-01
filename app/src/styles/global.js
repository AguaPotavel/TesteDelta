import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { Dimensions } from 'react-native';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

let heightStatus = StatusBar.currentHeight

export const SafeAreaView = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
    margin-top: ${ heightStatus + 20}px;
`;