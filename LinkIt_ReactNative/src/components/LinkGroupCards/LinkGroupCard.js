import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';


export default class LinkGroupCard extends Component {
    render() {
        return(
            <TouchableOpacity>
            <View style={[styles.container, {backgroundColor: this.props.groupColor}]}>
                <View style={styles.leftContent}>
                    <Text style={styles.title}>{this.props.groupName}</Text>
                </View>

                <View style={styles.rightContent}>
                    <Image 
                        style={styles.rightDirectionIcon}
                        source={require('../../assets/images/right4.png')}
                    />
                </View>
            </View>
            </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginBottom: 15,
        //backgroundColor: '#6c5ce7',
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