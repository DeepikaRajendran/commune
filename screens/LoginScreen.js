import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import color from './../config/color';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.verificationText}>Verification</Text>
            </View>
            <View style={styles.content}>
                <TextInput style={styles.phoneNumber} placeholder="Enter Phone Number" placeholderTextColor={color.whiteWithOpacity}
                    onChangeText={(text) => onChangeText(text)}></TextInput>
            </View>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.verifyButton}
                >
                    <Text> Verify </Text>
                </TouchableOpacity>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.blue,
        boxShadow: '0px 4px 10px rgba(45, 137, 204, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verificationText: {
        fontSize: '24px',
        color: color.white,
    },
    phoneNumber: {
        width: '50%',
        height: '42px',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        borderRadius: '5px',
        textAlign: 'center'
    },
    verifyButton: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: color.white,
        width: '83px',
        height: '42px',
        borderRadius: '5px',
        color: color.blue
    }


});
