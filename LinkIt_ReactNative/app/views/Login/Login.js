import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import LoginForm from '../../components/LoginForm';
export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo} 
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: '50%',
    },
    formContainer: {
        marginTop: '20%',
    }
});