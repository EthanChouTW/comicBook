import React, { Component } from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import PropTypes from 'prop-types'
import Page from './page';

export default class BookModal extends Component {
    static propTypes = {
        bookId: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        onClose: PropTypes.func.isRequired,
        visible: PropTypes.bool,
    }

    renderItem = (element) => {
        return <Page bookId={this.props.bookId} pageNumber={element.index + 1} item={element.item} onClose={this.props.onClose}></Page>
    }

    render() {
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={this.props.onClose}
            >
                <FlatList
                    keyExtractor={item => item.key}
                    renderItem={this.renderItem}
                    data={this.props.data}
                >
                </FlatList>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={this.props.onClose}
                >
                    <Text>close</Text>
                </TouchableOpacity>

            </Modal>
        )
    }


}
const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 80,
        height: 80
    }
})