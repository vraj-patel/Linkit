import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

import LinkGroupCards from '../LinkGroupCards/LinkGroupCards';

import { SearchBar } from 'react-native-elements';

export default class Body extends Component {
    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.searchBar}>
                        <SearchBar 
                            lightTheme={true}
                        />
                    </View>

                    <View style={styles.functionButtons}>
                        
                    </View>

                    <View style={styles.cardSection}>
                        <View style={styles.cardsContainer}>
                        <LinkGroupCards />
                        </View>
                        
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        margin: 10,
        //backgroundColor: 'red'
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        margin: 10,
        //backgroundColor: 'red',
    },
    searchBar: {
        flex: 1,
        //backgroundColor: 'red'
    }, 
    functionButtons: {
        flex: 1,
        backgroundColor: 'gray'
    },
    cardSection: {
        flex: 10,
        //backgroundColor: 'white'
    },
    cardsContainer: {
        marginTop: 15,
       // backgroundColor: 'white'
    }
   
});