import * as React from 'react';
import { useState } from 'react';
import { LayoutChangeEvent, Modal, Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { KeyboardGestureArea } from 'react-native-keyboard-controller';
import { KeyboardStickyView } from './KeyboardStickyView';

type Props = {
    open: boolean
    onClose: () => void
    children?: React.ReactNode
}

export function KeyboardAccessorySheet({ open, onClose, children }: Props) {
    const [ viewHeight, setViewHeight ] = useState(108);

    // used to detect the actual content height of the view
    const handleLayout = (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        if (height > 0) {
            setViewHeight(height);
        }
    };

    return (
        <Modal
            animationType={Platform.OS === 'ios' ? 'none' : 'slide'}
            transparent={true}
            visible={open}
            onRequestClose={onClose}
        >
            <GestureHandlerRootView>
                <ScrollView
                    keyboardDismissMode="interactive"
                    keyboardShouldPersistTaps="always"
                    contentContainerStyle={{
                        flex: 1,
                    }}
                >
                    <KeyboardGestureArea
                        interpolator="ios"
                        offset={viewHeight}
                        textInputNativeID="accessory-text-input"
                        style={styles.accessoryView}
                    >
                        <KeyboardStickyView
                            onClose={onClose}
                        >
                            <View
                                style={styles.container}
                                onLayout={handleLayout}
                            >
                                <View style={[
                                    styles.content,
                                    { paddingBottom: 8 },
                                ]}>
                                    <View style={styles.handle} />
                                    {children}
                                </View>
                            </View>
                        </KeyboardStickyView>
                    </KeyboardGestureArea>
                </ScrollView>
            </GestureHandlerRootView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
        // keep left/right border from being shown
        marginLeft: -1,
        marginRight: -1,
    },
    accessoryView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        flex: 1,
    },
    handle: {
        width: 32,
        height: 4,
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 12,
    },
});
