import React from "react";
import ListItem from "./List";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const List = props => {
  return (
    <FlatList
      data={props.values}
      renderItem={info => {
        return (
          <ListItem
            deleteItem={() => props.selectItem(info.item.key)}
            val={info.item.val}
            img={info.item.img}
            // key={info.key}
          />
        );
      }}
    />
  );
};

export default List;
