import React from "react";
import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";
import PhotoListItem from "./PhotoListItem";

// React Native navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PhotosList from "./PhotosList";
import PhotoDetails from "./PhotoDetails";

const MainNavigator = createStackNavigator({
  Home: { screen: PhotosList },
  Details: { screen: PhotoDetails }
});

const App = createAppContainer(MainNavigator);

export default App;
