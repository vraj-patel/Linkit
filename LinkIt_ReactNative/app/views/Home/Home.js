import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

export default class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Header />
                </View>

                <View style={styles.body}>
                <Body />
                </View>

                <View style={styles.footer}>
                <Footer />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'pink',
    },
    header: {
        flex: 1,
        backgroundColor: '#e74c3c'
    },
    body: {
        flex: 7,
        backgroundColor: 'white'
    },
    footer: {
        flex: 1,
        backgroundColor: '#e74c3c'
    }
   
});