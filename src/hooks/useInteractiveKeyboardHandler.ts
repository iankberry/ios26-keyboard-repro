import { useKeyboardHandler } from 'react-native-keyboard-controller';
import { useSharedValue } from 'react-native-reanimated';

export function useInteractiveKeyboardHandler(onClose: () => void) {
    const keyboardHeight = useSharedValue(0);
    const keyboardProgress = useSharedValue(0);
    const interactiveProgress = useSharedValue<number|false>(false);

    useKeyboardHandler(
        {
            onStart: (e) => {
                'worklet';
                console.log('onStart: ' + e.height + ' percent ' + e.progress);
            },
            onMove: (e) => {
                'worklet';
                console.log('onMove: ' + e.height + ' percent ' + e.progress);

                if (e.height >= 0 && e.progress <= 1) {
                    keyboardHeight.value = e.height;
                    keyboardProgress.value = e.progress;
                }
            },
            onEnd: (e) => {
                'worklet';
                console.log('onEnd: ' + e.height + ' percent ' + e.progress);

                if (e.height >= 0 && e.progress <= 1) {
                    keyboardHeight.value = e.height;
                    keyboardProgress.value = e.progress;
                }
            },
            onInteractive: (e) => {
                'worklet';
                console.log('onInteractive: ' + e.height + ' percent ' + e.progress);

                if (e.height >= 0 && e.progress <= 1) {
                    keyboardHeight.value = e.height;
                    keyboardProgress.value = e.progress;
                    interactiveProgress.value = e.progress;
                }
            },
        },
        [],
    );

    return {
        keyboardHeight,
        keyboardProgress,
    };
}
