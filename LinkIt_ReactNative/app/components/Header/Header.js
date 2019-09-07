import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import HeaderIcons from './HeaderIcons';
export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>

                   <View style={styles.leftContent}>
                       {/* CONDITIONAL RENDERING OF BACK ICON */}
                   </View>
                    
                   <View style={styles.centerContent}>
                    <Text style={styles.title}>Home</Text>
                   </View>

                   <View style={styles.rightContent}>
                    <HeaderIcons />
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
    headerContent:{
        flexDirection: 'row',
        //backgroundColor: 'purple',
        height: '50%',
        top: '10%'
    },
    title: {
        fontFamily: 'arial',
        fontSize: 30,
        color: '#ecf0f1',
        alignSelf: 'center'
    },
    leftContent: {
        //backgroundColor: 'blue',
        flex: 1
    },
    centerContent: {
        //backgroundColor: 'green',
        flex: 1
    },
    rightContent: {
        //backgroundColor: 'yellow',
        flex: 1
        
    },

});