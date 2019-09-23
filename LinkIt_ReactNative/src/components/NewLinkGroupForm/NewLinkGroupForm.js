import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';

import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import ColourPicker from './ColourPicker';
import {closeForms, setFooterIconStatus, addGroup} from '../../actions'

class NewLinkGroupForm extends Component {

    state = {
        groupName: null,
        color: null,
    }


    cancelPressed() {
        this.props.closeForms();
        this.props.setFooterIconStatus(false, false, false);
    }

    addPressed() {
        const group = {
            name: this.state.groupName,
            color: this.state.color,
            links: []
        }
        this.props.addGroup(group);
        this.cancelPressed();
    }

    setColor(color) {
        this.setState({color: color});
    }

    render() {
        return (
            <Modal
                transparent
                animationType="slide"
                visible= {this.props.isAddGroupFormOpen}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.topContent}>
                            <Input 
                                containerStyle={styles.linkNameInput}
                                placeholder='Group Name'
                                label='Enter Group Name'
                                labelStyle={{color: 'gray'}}
                                onChangeText={(text) => this.setState({groupName: text})}
                            />
                            <View style={styles.colourPickerContainer}>
                                <Text style={styles.chooseColorText}>Choose Group Colour</Text>
                                <ColourPicker getSelectedColor={this.setColor.bind(this)}/>
                            </View>
                            
                        </View>
                        <View style={styles.bottomContent}>
                        
                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Add Group'
                                onPress={() => this.addPressed()}
                            />

                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Cancel'
                                onPress={() => this.cancelPressed()}
                            />
                        </View>
                            
                        
                            
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "white",
        marginRight: '10%',
        marginLeft: '10%',
        marginTop: Dimensions.get('screen').height * 0.12,
        marginBottom: Dimensions.get('screen').height * 0.13,
        borderColor: 'black',
        borderWidth: 1
    },
    formContainer: {
        flex: 1,
        //backgroundColor: 'pink',
        margin: 10,
    },
    topContent: {
        flex: 3,
        //backgroundColor: 'black'
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 10,
        //backgroundColor: 'red'
    },
    linkNameInput: {
        top: 10,
        //backgroundColor: 'pink'
    },
    linkInput: {
        marginTop: 30,
        
        //backgroundColor: 'pink'
    },
    chooseColorText: {
        top: '10%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray'
    },
    button: {
        backgroundColor: 'gray',
    },
    buttonContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    colourPickerContainer: {
        top: 30
    }
    
});

function mapStateToProps(state) {
    return {
        isAddGroupFormOpen: state.formsStatusReducer.isAddGroupFormOpen,
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeForms: () => dispatch(closeForms()),
        setFooterIconStatus: (isEditActive, isAddActive, isSortActive) => dispatch(setFooterIconStatus(isEditActive, isAddActive, isSortActive)),
        addGroup: (group) => dispatch(addGroup(group))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLinkGroupForm);