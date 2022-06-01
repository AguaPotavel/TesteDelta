import React, { ReactNode } from 'react';
import { Dimensions } from 'react-native';

import {
    ModalWrapper,
    Content,
    OutArea
} from './styles';

import {
    BackdropAnimation,
    ContentAnimation
} from './Animations';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function RModal ({ children, show, setShow }) {

    return(
        <ModalWrapper width={windowWidth} height={windowHeight}>
            <BackdropAnimation show={show}>
                <ContentAnimation show={show}>
                    <Content>
                        {children}
                    </Content>
                </ContentAnimation>
            </BackdropAnimation>
            <OutArea onPress={()=> setShow(false)}/>
        </ModalWrapper>
    )
}