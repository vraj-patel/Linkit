import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

import LinkGroupCard from './LinkGroupCard';

export default class LinkGroupCards extends Component {
    render() {
        return(
            <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
                <LinkGroupCard />
                <LinkGroupCard />
                <LinkGroupCard />
                <LinkGroupCard />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        //flexDirection: 'column',
    },
   
});