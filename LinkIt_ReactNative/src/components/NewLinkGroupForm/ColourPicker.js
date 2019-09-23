import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';

import { Input, Button } from 'react-native-elements';
import { whileStatement } from '@babel/types';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#16a085'}]} 
                    onPress={() => this.props.getSelectedColor('#16a085')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#34495e'}]} 
                    onPress={() => this.props.getSelectedColor('#34495e')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#2980b9'}]} 
                    onPress={() => this.props.getSelectedColor('#2980b9')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#f1c40f'}]} 
                    onPress={() => this.props.getSelectedColor('#f1c40f')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#c0392b'}]} 
                    onPress={() => this.props.getSelectedColor('#c0392b')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#6c5ce7'}]} 
                    onPress={() => this.props.getSelectedColor('#6c5ce7')}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#fd79a8'}]} 
                    onPress={() => this.props.getSelectedColor('#fd79a8')}
                />
                   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    button: {
        height: 40,
        width: 50,
        margin: 5,
        // borderColor: 'black',
        // borderWidth: 3
    }
    
});