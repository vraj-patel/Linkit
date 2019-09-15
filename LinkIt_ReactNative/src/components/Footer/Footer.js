import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


export default class Footer extends Component {

    state = {
        isEditActive: false,
        isAddActive: false,
        isSortActive: false
    }

    checkActive(icon) {
        if (icon === 'edit') {
            if (this.state.isEditActive) return styles.footerButton_Active;
        } else if (icon === 'add') {
            if (this.state.isAddActive) return styles.footerButton_Active;
        } else if (icon === 'sort') {
            if (this.state.isSortActive) return styles.footerButton_Active;
        }
    }

    setActiveIcon(icon) {
        this.setState({
            isEditActive: icon === 'edit' ? true : false,
            isAddActive: icon === 'add' ? true : false,
            isSortActive: icon === 'sort' ? true : false,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.footerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('edit')]}
                            onPress={() => this.setActiveIcon('edit')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/editIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('add')]}
                            onPress={() => this.setActiveIcon('add')}
                        >
                            {/* <Text style={styles.footerButtonText}>Disabled</Text> */}
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/addIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('sort')]}
                            onPress={() => this.setActiveIcon('sort')}
                        >
                            {/* <Text style={styles.footerButtonText}>Archived</Text> */}
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/sortIcon.png')}
                            />
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
        marginTop: '4%',
        //backgroundColor: 'blue',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        //backgroundColor: 'yellow',
        marginHorizontal: 50,
        height: '55%'
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    footerButton_Active: {
        borderBottomColor: 'white',
        borderBottomWidth: 5
    },
    
    footerButtonText: {
        color: 'white',
        fontSize: 18,
        borderBottomColor: 'black',

    },
    icon: {
        height: 30,
        width: 30
    }

});