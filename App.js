import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Button, Modal, TextInput, Image } from 'react-native';
import BookModal from './components/bookModal';

const { height, width } = Dimensions.get('window');
export default class App extends React.Component {
  state = {
    bookId: '1',
    isShowModal: false,
    data: Array(200).fill(null).map((u, i) => ({ key: `${i}` }))
  }

  renderModal = () =>
    <BookModal
      onClose={this.onCloseModal}
      data={this.state.data}
      visible={this.state.isShowModal}
      bookId={this.state.bookId}
    ></BookModal>

  toggleModal = () => this.setState({
    isShowModal: !this.state.isShowModal
  })

  onCloseModal = () => this.setState({
    isShowModal: false
  })

  onChangeText = (text) => this.setState({ bookId: text })

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.bookInputMessage}>輸入集數</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onChangeText}
          value={this.state.bookId}
          keyboardType='numeric'
        ></TextInput>
        <Button
          title="click"
          onPress={this.toggleModal}
        ></Button>
        <Image
          style={styles.image}
          source={require('./assets/main.png')}
        />
        {this.state.isShowModal && this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell: {
    height: 100,
    backgroundColor: 'red'
  },
  bookInputMessage: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    width: 100,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    marginTop: 30,
    width: width,
    height: 400,
    resizeMode: 'cover'
  }
});
