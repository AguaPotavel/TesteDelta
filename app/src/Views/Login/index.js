import react from "react";
import { View, Text } from 'react-native'
import { useModal } from '../../contexts/useModal'

import { PrimaryButton } from "../../components/Buttons";

import { ModalConfirmation } from "./subComponents/ModalConfirmation";
import { InputTextComponent } from '../../components/InputText';
import {
    Container,
} from './styles'

export default function Login({ navigation }) {
    const { setShowModal, setComponentModal, setIsLoading } = useModal()
    // console.log('Login')

    const handleLogin = () => {
        // setIsLoading(true)
        // setTimeout(() => {
        //     setIsLoading(false)
        //     setShowModal(false)
        //     setComponentModal(null)
        // }, 2000)
        navigation.navigate('Home')
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setIsLoading(false)
        setComponentModal(null)
    }

    const handleOpenModal = () => {
        setIsLoading(true)
        setShowModal(true)
        setTimeout(() => {
            setIsLoading(false)
            setComponentModal(<ModalConfirmation onClose={handleCloseModal}/>)
        }, 2000)
    }

    return (
        <Container>
            <InputTextComponent placeholder={'username'} iconName={"user"} />
            <InputTextComponent placeholder={'Email'} iconName={"mail"} />
            <PrimaryButton onPress={handleLogin} text={'Entrar'}/>
        </Container>
    )
}