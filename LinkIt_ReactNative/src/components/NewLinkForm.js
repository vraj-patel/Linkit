import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';

import { Input, Button } from 'react-native-elements';

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
                                placeholder='Link Name'
                                label='Enter Link Name'
                            />
                            <Input 
                                containerStyle={styles.linkInput}
                                placeholder='Link'
                                label="Paste Your Link"
                            />

                            <Text style={styles.hintText}>Hint: To copy link, press the copy icon within the link card. To open, press link name.</Text>
                        </View>
                        <View style={styles.bottomContent}>
                        
                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Add Link'
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
        flex: 1,
        //backgroundColor: 'black'
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 10
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
    hintText: {
        top: '10%',
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        backgroundColor: 'gray',
    },
    buttonContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
    
});