import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

import LinkCard from './LinkCard';

export default class LinkCards extends Component {
    render() {
        return(
            <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
   
});