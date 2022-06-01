import react from "react";
import { View, Text, FlatList } from 'react-native'
import { useModal } from '../../contexts/useModal'

import { PrimaryButton } from "../../components/Buttons";

import { ModalConfirmation } from "./subComponents/ModalConfirmation";
import { InputTextComponent } from '../../components/InputText';
import { StudentItemComponent } from './subComponents/StudentItem'
import {
    Container,
    TitlePage,
    ButtonsArea,
} from './styles'


const DATA = [
    {
        id: 1,
        name: 'Student 1',
        end: 'End 1',
        imgSrc: 'https://picsum.photos/200/300',
    }
]

export default function Home({ navigation }) {
    const { setShowModal, setComponentModal, setIsLoading } = useModal()

    const handleAddNewStudent = () => {
        navigation.navigate('Student', {})
    }

    return (
        <Container>
            <TitlePage>
                Lista de Alunos
            </TitlePage>
            <ButtonsArea>
                <PrimaryButton onPress={handleAddNewStudent} text={'Adicionar'}/>
            </ButtonsArea>
            <FlatList
                style={{ width: '100%', paddingVertical: 10 }}
                data={[1,2,3,4,5,6,7,8,9,10]}
                renderItem={({ item }) => <StudentItemComponent navigation={navigation}/>}
                keyExtractor={item => item.toString()}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}