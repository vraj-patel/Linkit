import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

export default class HeaderIcons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                <Image 
                    style={styles.icon}
                    source={require('../../assets/images/settings2.png')}
                />
                </View>
                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row-reverse',
        flex: 1,
        //backgroundColor: 'black',
        alignContent: 'center'
    },
    icon: {
        marginTop: '5%',
        height: 30,
        width: 30,
        marginRight: 10,
        //backgroundColor: 'white'
    },
    
});