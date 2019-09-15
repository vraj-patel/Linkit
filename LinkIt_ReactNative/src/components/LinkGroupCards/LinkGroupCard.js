import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';


export default class LinkGroupCard extends Component {
    render() {
        return(
            <View style={styles.container}>

                <View style={styles.leftContent}>
                    <Text style={styles.title}>Some Group Name</Text>
                </View>

                <View style={styles.rightContent}>
                    <Image 
                        style={styles.rightDirectionIcon}
                        source={require('../../assets/images/right4.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginBottom: 15,
        backgroundColor: '#6c5ce7',
        flexDirection: 'row'
    },
    leftContent: {
        flex: 10,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContent: {
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    rightDirectionIcon: {
        height: 20,
        width: 20,
    },
    title:  {
        fontSize: 30,
        color: 'white'
    }
   
});