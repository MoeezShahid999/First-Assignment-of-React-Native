import React, { Component } from "react";
import {
  View,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const ModalComponent = props => {
  const visible = props.item ? true : false;

  const data = props.item ? (
    <View style={styles.contentContainer}>
      <Image source={props.item.img} style={styles.img} />
      <Text style={styles.txt}>{props.item.val}</Text>
    </View>
  ) : null;
  return (
    <View>
      <Modal animationType="slide" visible={visible}>
        <View>{data}</View>
        <View style = {styles.btnContainer}>
          <TouchableOpacity onPress={props.close} style = {styles.btn}>
            <Text style = {{color:"white"}}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.delete}  style = {styles.btn}>
            <Text style = {{color:"white"}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
      margin:10,
    alignItems: "center"
  },
  img: {
    height: 250,
    width: 300
  },
  txt: {
    fontSize: 36
  },
  btn:{
      padding:10,
    margin:10,
    backgroundColor:'blue',

  },
  btnContainer:{
    alignItems:"center",
    flexDirection:'row',
    justifyContent:"center"
  }
});

export default ModalComponent;
