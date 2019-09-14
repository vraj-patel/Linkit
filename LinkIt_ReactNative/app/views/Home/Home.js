import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, TextInput, Image, SafeAreaView } from 'react-native';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#e74c3c' }} />
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Header />
                    </View>

                    <View style={styles.body}>
                        <Body />
                    </View>

                    <View style={styles.footer}>
                        <Footer />
                    </View>
                </SafeAreaView>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#e74c3c' }} />
            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'pink',
    },
    header: {
        flex: 2,
        backgroundColor: '#e74c3c'
    },
    body: {
        flex: 31,
        backgroundColor: 'white'
    },
    footer: {
        flex: 3,
        backgroundColor: '#e74c3c'
    }

});