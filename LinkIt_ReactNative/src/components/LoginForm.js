import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {styles.input}
                    placeholder = "username or email"
                    placeholderTextColor = 'rgba(255, 255, 255, 0.8)'
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "password"
                    placeholderTextColor = 'rgba(255, 255, 255, 0.8)'
                />


            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#636e72',
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#FFF',
    }
});