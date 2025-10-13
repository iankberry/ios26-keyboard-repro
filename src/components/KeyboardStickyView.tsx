import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useInteractiveKeyboardHandler } from '../hooks';

type Props = {
    // called when the accessory view should be closed
    onClose: () => void
    // accessory view content
    children: React.ReactNode
}

export function KeyboardStickyView({
    onClose,
    children,
}: Props) {
    // track the interactive keyboard to move the accessory view along with it
    const { keyboardHeight } = useInteractiveKeyboardHandler(onClose);

    // move the accessory view up/down with the keyboard
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: -keyboardHeight.value },
            ],
        };
    }, []);

    return (
        <Animated.View style={animatedStyle}>
            {children}
        </Animated.View>
    );
}
