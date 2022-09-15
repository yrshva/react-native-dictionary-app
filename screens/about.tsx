import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const About = () => {
  return (
    <View style={styles.container}>
      <Text>
        Dictionary application was developed by Anastasiia Yershova to search
        for words' definitions and see examples of using it.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
});
