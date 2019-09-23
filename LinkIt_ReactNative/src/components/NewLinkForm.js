import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import { closeForms, setFooterIconStatus, addLink } from '../actions'

class NewLinkForm extends Component {

    state = {
        linkName: '',
        linkValue: ''
    }
    
    cancelPressed() {
        this.props.closeForms();
        this.props.setFooterIconStatus(false, false, false);

    }

    addPressed() {
        const link = {
            name: this.state.linkName,
            value: this.state.linkValue
        }
        this.props.addLink(link);
        this.cancelPressed();
    }

    render() {
        return (
            <Modal
                transparent
                animationType="slide"
                visible={this.props.isAddLinkFormOpen}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.topContent}>
                            <Input 
                                containerStyle={styles.linkNameInput}
                                placeholder='Link Name'
                                label='Enter Link Name'
                                onChangeText={(text) => this.setState({linkName: text})}
                            />
                            <Input 
                                containerStyle={styles.linkInput}
                                placeholder='Link'
                                label="Paste Your Link"
                                onChangeText={(text) => this.setState({linkValue: text})}
                            />

                            <Text style={styles.hintText}>Hint: To copy link, press the copy icon within the link card. To open, press link name.</Text>
                        </View>
                        <View style={styles.bottomContent}>
                        
                            <Button 
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                                title= 'Add Link'
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
        flex: 1,
        //backgroundColor: 'black'
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 10
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
    hintText: {
        top: '10%',
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        backgroundColor: 'gray',
    },
    buttonContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
    
});

function mapStateToProps(state) {
    return {
        isAddLinkFormOpen: state.formsStatusReducer.isAddLinkFormOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeForms: () => dispatch(closeForms()),
        setFooterIconStatus: (isEditActive, isAddActive, isSortActive) => dispatch(setFooterIconStatus(isEditActive, isAddActive, isSortActive)),
        addLink: (link) => dispatch(addLink(link)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLinkForm);