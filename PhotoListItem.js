import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function PhotoListItem(props) {
  const { photo, navigate } = props;

  return (
    <TouchableOpacity
      onPress={() => navigate("Details", photo)}
      style={{ flex: 1, flexDirection: "row", marginRight: 5 }}
    >
      <Text style={styles.textView}>{photo.title}</Text>
      <Image source={{ uri: photo.thumbnailUrl }} style={styles.imageView} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7
  },
  textView: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  }
});
