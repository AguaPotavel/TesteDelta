import React, { useEffect, createContext, useContext, useState } from 'react';

import { RModal } from '../components/RModal';
import LottieView from 'lottie-react-native';

const ModalContext = createContext({});

function ModalProvider({ children }){
    const [showModal, setShowModal] = useState(false);
    const [showModalSync, setShowModalSync] = useState(false);
    const [componentModal, setComponentModal] = useState(<></>);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if(showModal) setShowModalSync(true);
        else{
            setTimeout(() => {
                setShowModalSync(false);
            }, 500);
        }
    }, [showModal])

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, componentModal, setComponentModal, setIsLoading, isLoading }}>
            {children}
            {showModalSync && !isLoading && (
                <RModal show={showModal} setShow={setShowModal}>
                    {componentModal}
                </RModal>
            )}
            {isLoading && showModalSync && (
                <RModal show={showModal} setShow={setShowModal}>
                    <LottieView source={require('../styles/lottie/loading.json')} autoPlay loop={true}/>
                </RModal>
            )}
        </ModalContext.Provider>
    );
}

function useModal(){
    const context = useContext(ModalContext);

    return context;
}

export { ModalProvider, useModal };