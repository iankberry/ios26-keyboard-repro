import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { KeyboardAccessorySheet } from './components/KeyboardAccessorySheet';

export function Home() {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => setOpen(true)}
            >
                <Text>Open sheet</Text>
            </Pressable>

            <KeyboardAccessorySheet
                open={open}
                onClose={() => setOpen(false)}
            >
                <TextInput
                    autoFocus={true}
                    multiline={true}
                    nativeID="accessory-text-input"
                    placeholder="Jot something down"
                    style={styles.input}
                />
                <View>
                    <Pressable
                        style={styles.button}
                        onPress={() => setOpen(false)}
                    >
                        <Text>Close sheet</Text>
                    </Pressable>
                </View>
            </KeyboardAccessorySheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    button: {
        padding: 8,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 17,
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        alignSelf: 'stretch',
    },
});