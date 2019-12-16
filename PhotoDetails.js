import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default class PhotoDetails extends React.Component {
  static navigationOptions = {
    title: "Photo Details"
  };

  render() {
    const photoTitle = this.props.navigation.getParam("title", {});
    const photoUri = this.props.navigation.getParam("url", {});

    return (
      <View style={styles.container}>
        <Text>{photoTitle}</Text>
        <Image source={{ uri: photoUri }} style={styles.imageView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  imageView: {
    width: "80%",
    height: "30%",
    margin: 7,
    borderRadius: 7
  }
});
