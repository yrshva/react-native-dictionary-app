import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { uid } from "uid";

interface Props {
  definitions: { definition: string; example: string }[];
}
const Definitions = (props: Props) => {
  return (
    <View>
      {props.definitions.map((definition, index) => (
        <View key={uid()}>
          <Text>
            {index + 1}. {definition.definition}
          </Text>
          {definition.example && <Text>e.g. {definition.example}</Text>}
        </View>
      ))}
    </View>
  );
};
export default Definitions;
