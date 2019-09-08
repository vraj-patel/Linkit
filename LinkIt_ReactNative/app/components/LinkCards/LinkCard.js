import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';


export default class LinkCard extends Component {
    render() {
        return(
            <View style={styles.container}>

                <View style={styles.leftContent}>
                    <Image 
                        style={styles.copyIcon}
                        source={require('../../assets/images/copyIcon.png')}
                    />
                </View>

                <View style={styles.rightContent}>
                <Text style={styles.title}>Some Link Name</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginBottom: 10,
        backgroundColor: '#6c5ce7',
        flexDirection: 'row'
    },
    leftContent: {
        flex: 3,
        backgroundColor: '#6c5ce7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContent: {
        flex: 17,
        backgroundColor: '#dfe4ea',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    copyIcon: {
        height: 25,
        width: 25,
    },
    title:  {
        fontSize: 20,
        color: '#2f3640'
    }
   
});