import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  GestureResponderEvent,
} from "react-native";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}
export const FlatButton: React.FC<Props> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#BEDBDB",
    marginHorizontal: 10,
  },
});
