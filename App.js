import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image} from 'react-native';
import PhotoListItem from './PhotoListItem';

export default class App extends React.Component {

  state = {
    isLoading: false,
    photos: []
  }

  fetchPhotos = () => {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=30")
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

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#e0e0eb",
        }}
      />
    );
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
        <FlatList
          data={photos}
          renderItem={({item}) => <PhotoListItem photo={item} /> }
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={photo => photo.id}
        />
        <Button title="Reload" onPress={this.fetchPhotos}/>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
