import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';

import { Input, Button } from 'react-native-elements';

import ColourPicker from './ColourPicker';

export default class LoginForm extends Component {
    render() {
        return (
            <Modal
                transparent
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.topContent}>
                            <Input 
                                containerStyle={styles.linkNameInput}
                                placeholder='Group Name'
                                label='Enter Group Name'
                                labelStyle={{color: 'gray'}}
                            />
                            <View style={styles.colourPickerContainer}>
                                <Text style={styles.chooseColorText}>Choose Group Colour</Text>
                                <ColourPicker />
                            </View>
                            
                        </View>
                        <View style={styles.bottomContent}>
                        
                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Add Group'
                            />

                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Cancel'
                            />
                        </View>
                            
                        
                            
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "white",
        marginRight: '10%',
        marginLeft: '10%',
        marginTop: Dimensions.get('screen').height * 0.12,
        marginBottom: Dimensions.get('screen').height * 0.13,
        borderColor: 'black',
        borderWidth: 1
    },
    formContainer: {
        flex: 1,
        //backgroundColor: 'pink',
        margin: 10,
    },
    topContent: {
        flex: 3,
        //backgroundColor: 'black'
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 10,
        //backgroundColor: 'red'
    },
    linkNameInput: {
        top: 10,
        //backgroundColor: 'pink'
    },
    linkInput: {
        marginTop: 30,
        
        //backgroundColor: 'pink'
    },
    chooseColorText: {
        top: '10%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray'
    },
    button: {
        backgroundColor: 'gray',
    },
    buttonContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    colourPickerContainer: {
        top: 30
    }
    
});