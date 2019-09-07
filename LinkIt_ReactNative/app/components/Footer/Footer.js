import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';


export default class Footer extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.footerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.footerButton_Active}>
                            <Text style={styles.footerButtonText}>Active</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Disabled</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Archived</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        //backgroundColor:'green'
    },
    footerContainer: {
        marginTop: '5%',
        //backgroundColor: 'blue',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        //backgroundColor: 'yellow',
        marginHorizontal: 50,
        height: '30%'
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    footerButton_Active: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
        borderBottomColor: '#d6d7da',
        borderBottomWidth: 5
    },
    footerButtonText: {
        color: 'white',
        fontSize: 18,
        borderBottomColor: 'black',

    }
    
   
});