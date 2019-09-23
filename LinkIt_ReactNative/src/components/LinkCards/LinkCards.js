import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

import LinkCard from './LinkCard';
import { connect } from 'react-redux';

class LinkCards extends Component {

    linksOfGroup() {
        // for (var i = 0; i < this.props.linkGroups.length; ++i) {
        //     if (this.props.linkGroups[i].id === this.props.id) {
        //         return this.props.linkGroups[i].links;
        //     }
        // }
    }

    render() {
        return(
            <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
                {linksOfGroup().map((link) => {
                    return (
                        <LinkCard />
                    )
                })}
                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
   
});

function mapStateToProps(state) {
    return {
        linkGroups: state.groupsReducer
    }
}

export default connect(mapStateToProps)(LinkCards)