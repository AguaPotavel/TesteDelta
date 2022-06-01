import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const AnimationContainer = styled(Animated.View)`
    display: flex;
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${({ theme, isActive }) => isActive? theme.colors.primary : theme.colors.background_hard};
`;
