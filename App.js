import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: false,
    photos: []
  }

  fetchPhotos = () => {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=200")
      .then(data => data.json())
      .then(photos => {
        this.setState({ 
          isLoading: false,
          photos: photos  
        });
      });
  }

  componentDidMount() {
      this.fetchPhotos();
  }

  render() {
    const { isLoading, photos } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading ...</Text>
        </View>
      );
    }

    if (!isLoading && photos.length < 1) {
      return (
        <View style={styles.container}>
          <Text>Loading ...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {photos.map(photo => <Text>{photo.title}</Text>)}
          <Button title="Reload" onPress={this.fetchPhotos}/>
        </ScrollView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
