import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

import LinkGroupCard from './LinkGroupCard';
import { connect } from 'react-redux';

class LinkGroupCards extends Component {
    render() {
        return(
            <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
                {this.props.linkGroups.map((group) => {
                    return (
                        <LinkGroupCard groupColor={group.color} groupName={group.name}/>
                    )
                })}
                
                {/* <LinkGroupCard /> */}
                
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

function mapStateToProps(state) {
    return {
        linkGroups: state.groupsReducer
    }
}

export default connect (mapStateToProps)(LinkGroupCards)