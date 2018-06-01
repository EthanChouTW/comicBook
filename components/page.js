import React, { Component } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getLink } from '../apis'
import PropTypes from 'prop-types'

const { height, width } = Dimensions.get('window');
const SINGLE_PAGE_LIMIT = 800;

export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            realWidth: 0,
            realHeight: 0,
            isProbablyEnd: false
        }
        
        Image.getSize(getLink({ bookId: props.bookId, page: Math.ceil(props.pageNumber / 2) }), (width, height) => {
            this.setState({
                realWidth: width,
                realHeight: height
            })
        }, (error) => {
            if (props.item.key < 10) {
                props.onClose();    
            }
            this.setState({
                isProbablyEnd: true
            })
        })

    }

    render() {
        const { realWidth, isProbablyEnd } = this.state;
        const { bookId, pageNumber } = this.props;

        if (isProbablyEnd) {
            return <View style={styles.endPage}><Text>沒了</Text></View> 
        }

        if (realWidth < SINGLE_PAGE_LIMIT) {
            return <Image
                style={[styles.container, { width: width}]}
                source={{ uri: getLink({ bookId: bookId, page: pageNumber }) }}
                onError={err => console.log(err)}
            />
        }

        return (
            <Image
                style={[styles.container, pageNumber % 2 === 0 ? styles.containerEven : styles.containerSingle]}
                source={{ uri: getLink({ bookId: bookId, page: Math.ceil(pageNumber / 2) }) }}
                onError={err => console.log(err)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: width,
        resizeMode: 'stretch'
    },
    containerSingle: {
        width: width * 2 ,
        marginLeft: -width,
    },
    containerEven: {
        width: width * 2,
        marginLeft: 0
    },
    endPage: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})