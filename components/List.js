import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import ListItem from "./listItem";

const List = props => {
  return (
    <TouchableOpacity onPress={props.deleteItem} style={styles.text}>
      <View style={styles.inner}>
        <Image style={styles.img} source={props.img} />
        <Text style = {{justifyContent:'center'}}>{props.val}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "#eee",
    margin: 5,
    justifyContent:'center',
    alignContent:'center'
  },
  img: {
    height: 40,
    width: 40
  },
  inner: {
    flexDirection: "row"
  }
  //   textContainer: {}
});
export default List;
