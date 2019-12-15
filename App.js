import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image} from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: false,
    photos: []
  }

  fetchPhotos = () => {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=40")
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
        <FlatList
          data={photos}
          renderItem={({item}) => 
          <View style={{flex:1, flexDirection: 'row', marginRight: 5}}>
            <Text style={styles.textView}>{item.title}</Text>
            <Image source = {{ uri: item.thumbnailUrl }} style={styles.imageView} />
          </View>}
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
  },
  imageView: {
    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
  },
  textView: {
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
  }
});
