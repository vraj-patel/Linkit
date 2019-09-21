import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import HeaderIcons from './HeaderIcons';
export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.leftContent}>
                        <Image
                            style={styles.leftIcon}
                            source={require('../../assets/images/leftIcon2.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.centerContent}>
                        <Text style={styles.title}>Groups</Text>
                    </View>

                    <View style={styles.rightContent}>
                        {/* <HeaderIcons /> */}
                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    headerContent: {
        flexDirection: 'row',
        //backgroundColor: 'purple',
        //height: '50%',
        //top: '5%'
    },
    title: {
        fontFamily: 'arial',
        fontSize: 30,
        color: '#ecf0f1',
        alignSelf: 'center'
    },
    leftContent: {
        //backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    centerContent: {
        //backgroundColor: 'green',
        flex: 1
    },
    rightContent: {
        //backgroundColor: 'yellow',
        flex: 1
    },
    leftIcon: {
        width: 20,
        height: 20,
        marginLeft: 15
    }

});