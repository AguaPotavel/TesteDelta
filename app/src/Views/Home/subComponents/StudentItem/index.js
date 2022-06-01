import react from "react"
import { Text } from 'react-native'
import { useTheme } from "styled-components"
import {
    StudentItem,
    Label,
    Value,
    InformationsContainer,
    InformationItem,
    ActionContainer,
    ActionButtonWrapper,
    ActionButton,
    ActionButtonIcon,
} from './styles'

export const StudentItemComponent = ({ navigation }) => {
    const { colors } = useTheme()

    return(
    <StudentItem>
        <InformationsContainer>
            <InformationItem>
                <Label>Nome:</Label>
                <Value>Student 1</Value>
            </InformationItem>
            
            <InformationItem>
                <Label>Endereço:</Label>
                <Value>Student 1</Value>
            </InformationItem>
        </InformationsContainer>
        <ActionContainer>
            <ActionButtonWrapper>
                <ActionButton onPress={() => console.log('teste')}>
                    <ActionButtonIcon name="edit" color={colors.primary}/>
                </ActionButton>
            </ActionButtonWrapper>
            <ActionButtonWrapper>
                <ActionButton onPress={() => console.log('teste')}>
                    <ActionButtonIcon name="trash" color={colors.primary}/>
                </ActionButton>
            </ActionButtonWrapper>
        </ActionContainer>
    </StudentItem>)
}