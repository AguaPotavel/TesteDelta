import React, { useEffect } from 'react';
import { ViewProps, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { 
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay,
} from "react-native-reanimated";

import { AnimationContainer, BackdropAnimationContainer } from './styles';

export const BackdropAnimation = ({ children, show }) => {
    const opacity = useSharedValue(0);
    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    });

    useEffect(() => {
        if(show){
            opacity.value = withTiming(1, { duration: 500 });
        }else{
            opacity.value = withTiming(0, { duration: 800 });
        }
        // console.log('animation show: ', show);
    }, [show])

    return(
    <BackdropAnimationContainer style={AnimatedStyle}>
        {children}
    </BackdropAnimationContainer>)
}


export const ContentAnimation = ({ children, show }) => {
    const opacity = useSharedValue(0);
    const position = useSharedValue(2000);
    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: position.value }]
        }
    });

    useEffect(() => {
        if(show){
            position.value = withDelay(500, withTiming(0, { duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1)}));
        }else{
            position.value = withTiming(-2000, { duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1)});
        }
        // console.log('animation show: ', show);
    }, [show])

    return(
    <AnimationContainer style={AnimatedStyle}>
        {children}
    </AnimationContainer>)
}