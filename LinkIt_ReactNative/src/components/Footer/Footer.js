import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
    setFooterIconStatus, 
    openAddGroupForm, 
    openAddLinkForm
} from '../../actions';

class Footer extends Component {

    state = {
        isEditActive: false,
        isAddActive: false,
        isSortActive: false
    }

    checkActive(icon) {
        if (icon === 'edit') {
            if (this.props.isEditActive) return styles.footerButton_Active;
        } else if (icon === 'add') {
            if (this.props.isAddActive) return styles.footerButton_Active;
        } else if (icon === 'sort') {
            if (this.props.isSortActive) return styles.footerButton_Active;
        }
    }

    editPressed() {
        if (this.props.isEditActive) 
            this.props.setFooterIconStatus(false, false, false);
        else 
            this.props.setFooterIconStatus(true, false, false);
    }

    addPressed() {
        if (this.props.isAddActive) 
            this.props.setFooterIconStatus(false, false, false);
        else 
            this.props.setFooterIconStatus(false, true, false);
        
        if (this.props.groupCardsDisplayed) 
            this.props.openAddGroupForm();
        else 
            this.props.openAddLinkForm();
        
    }

    sortPressed() {
        if (this.props.isSortActive) 
            this.props.setFooterIconStatus(false, false, false);
        else 
            this.props.setFooterIconStatus(false, false, true);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.footerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('edit')]}
                            onPress={() => this.editPressed()}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/editIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('add')]}
                            onPress={() => this.addPressed()}
                        >
                            {/* <Text style={styles.footerButtonText}>Disabled</Text> */}
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/addIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.footerButton, this.checkActive('sort')]}
                            onPress={() => this.sortPressed()}
                        >
                            {/* <Text style={styles.footerButtonText}>Archived</Text> */}
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/sortIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        //backgroundColor:'green'
    },
    footerContainer: {
        marginTop: '4%',
        //backgroundColor: 'blue',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        //backgroundColor: 'yellow',
        marginHorizontal: 50,
        height: '55%'
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    footerButton_Active: {
        borderBottomColor: 'white',
        borderBottomWidth: 5
    },
    
    footerButtonText: {
        color: 'white',
        fontSize: 18,
        borderBottomColor: 'black',

    },
    icon: {
        height: 30,
        width: 30
    }

});

function mapStateToProps(state) {
    return {
        isEditActive: state.footerIconsReducer.isEditActive,
        isAddActive: state.footerIconsReducer.isAddActive,
        isSortActive: state.footerIconsReducer.isSortActive,
        groupCardsDisplayed: state.currBodyInfoReducer.groupCardsDisplayed,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFooterIconStatus: (isEditActive, isAddActive, isSortActive) => dispatch(setFooterIconStatus(isEditActive, isAddActive, isSortActive)),
        openAddGroupForm: () => dispatch(openAddGroupForm()),
        openAddLinkForm: () => dispatch(openAddLinkForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)