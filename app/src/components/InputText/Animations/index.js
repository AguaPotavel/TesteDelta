import React, { useEffect } from 'react';
import { 
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay,
} from "react-native-reanimated";

import { AnimationContainer } from './styles';


export const IconWrapper = ({ children, show }) => {
    const marginRight = useSharedValue(0);
    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            marginRight: marginRight.value
        }
    });

    useEffect(() => {
        if(show){
            marginRight.value = withTiming(10, { duration: 500 });
        }else{
            marginRight.value = withTiming(0, { duration: 800 });
        }
        // console.log('animation show: ', show);
    }, [show])

    return(
    <AnimationContainer style={AnimatedStyle} isActive={show}>
        {children}
    </AnimationContainer>)
}