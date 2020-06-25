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
                <Text style={styles.verificationText}>Sign In</Text>

                {/* <TextInput textContentType="telephoneNumber"
                    placeholder="Enter Phone Number"
                    placeholderTextColor={color.whiteWithOpacity}
                    textalign='center'
                    style={styles.phoneNumber}
                    onChangeText={text => setPhoneNum(text)}
                    value={phoneNum}
                    keyboardType={'numeric'}
                /> */}
                <TextInput
                    textContentType="emailAddress"
                    placeholder="Email"
                    placeholderTextColor={color.whiteWithOpacity}
                    textalign='center'
                    style={styles.field}
                />
                <TextInput
                    textContentType="password"
                    placeholder="Password"
                    placeholderTextColor={color.whiteWithOpacity}
                    textalign='center'
                    style={styles.field}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handlePress}
                >
                    <Text style={[styles.setColorBlue, styles.setButtonDecoration]}> Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handlePress}
                >
                    <Text style={[styles.setColorWhite, styles.setButtonDecoration]}> Register </Text>
                </TouchableOpacity>

            </View>
        </View >
    );
}
function handlePress() {
    console.log("verified")
}

const styles = StyleSheet.create({
    setButtonDecoration: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '800',
    },
    setColorWhite: {
        color: color.white,

    },
    setColorBlue: {
        color: color.blue
    },
    container: {
        flex: 1,
        backgroundColor: color.blue,
        boxShadow: '0px 4px 10px rgba(45, 137, 204, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Muli'
    },
    content: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttons: {
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
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
    signInButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        width: '83px',
        height: '42px',
        borderRadius: '5px',
        color: color.blue
    },
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.blue,
        width: '83px',
        height: '42px',
        borderRadius: '5px',
        border: '1px solid #fff',
        borderColor: color.white,
        borderWidth: '2.5px'
    },
    field: {
        color: color.white,
        width: '70%',
        height: '42px',
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
        borderRadius: '5px',
        paddingLeft: '20px',
    },


});
