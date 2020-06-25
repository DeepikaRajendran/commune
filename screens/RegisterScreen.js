import React from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';
import { useState } from 'react';

import color from '../config/color';

export default function RegisterScreen() {
    // const [fields, setFields] = useState({ name: '', email: '' });
    const [gender, setGender] = useState("female");

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.titleText}>Register</Text>
                    <TextInput
                        textContentType="name"
                        placeholder="Name"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <TextInput
                        textContentType="emailAddress"
                        placeholder="Email"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <TextInput
                        textContentType="sublocality"
                        placeholder="House No/ Flat No"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <TextInput
                        textContentType="fullStreetAddress"
                        placeholder="Street Name"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <TextInput
                        textContentType="addressCityAndState"
                        placeholder="City/State"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <TextInput
                        textContentType="countryName"
                        placeholder="Country"
                        placeholderTextColor={color.whiteWithOpacity}
                        textalign='center'
                        style={styles.field}
                    />
                    <Picker
                        itemStyle={{ color: color.black, textDecorationColor: color.blue }}
                        mode='dialog'
                        selectedValue={gender}
                        style={styles.field}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Male" value="male" />
                    </Picker>

                </View>
            </View>
        </View>
    );

    function showDatePicker() {
        return <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
        />
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '95%',
        top: '0px',
        backgroundColor: color.blue,
        borderBottomLeftRadius: 170,
    },
    content: {
        flex: 0.8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    titleText: {
        color: color.white,
        fontSize: '24px',
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