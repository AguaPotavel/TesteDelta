import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const AnimationContainer = styled(Animated.View)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const BackdropAnimationContainer = styled(Animated.View)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
`;