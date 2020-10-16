import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

export default function ColorButton({
  backgroundColor,
  onPress = f => f
}) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor= "gray"
    >
      <View style={styles.row}>
        <View
          style={[styles.sample, { backgroundColor }]}
        />
        <Text style={styles.buttonText}>
          {backgroundColor}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  }
});
