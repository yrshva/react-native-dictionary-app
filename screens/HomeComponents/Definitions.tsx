import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { uid } from "uid";

interface Props {
  definitions: { definition: string; example: string }[];
}
const Definitions = (props: Props) => (
  <>
    {props.definitions.map((definition, index) => (
      <View key={uid()} style={styles.definitionWrapper}>
        <Text style={styles.definition}>
          {index + 1}. {definition.definition}
        </Text>
        {definition.example && (
          <Text style={styles.example}>e.g. {definition.example}</Text>
        )}
      </View>
    ))}
  </>
);
export default Definitions;

const styles = StyleSheet.create({
  definitionWrapper: {
    marginVertical: 2,
  },
  definition: {
    fontFamily: "Inter_300Light",
  },
  example: {
    marginVertical: 2,
    fontSize: 12,
    fontFamily: "Inter_200ExtraLight",
  },
});
