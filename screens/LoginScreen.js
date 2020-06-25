import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';

import color from './../config/color';

export default function HomeScreen() {
    const [phoneNum, setPhoneNum] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.verificationText}>Verification</Text>
            </View>
            <View style={styles.content}>
                <TextInput textContentType="telephoneNumber"
                    placeholder="Enter Phone Number"
                    placeholderTextColor={color.whiteWithOpacity}
                    textalign='center'
                    style={styles.phoneNumber}
                    onChangeText={text => setPhoneNum(text)}
                    value={phoneNum}
                    keyboardType={'numeric'}
                />
            </View>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.verifyButton}
                    onPress={handlePress}
                >
                    <Text> Verify </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}
function handlePress() {
    console.log("verified")
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
        paddingLeft: '20px'
    },
    verifyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        width: '83px',
        height: '42px',
        borderRadius: '5px'
    }


});
