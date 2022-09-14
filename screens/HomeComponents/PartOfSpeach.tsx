import React from "react";
import { uid } from "uid";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Definitions from "./Definitions";

interface Props {
  meanings: { partOfSpeech: string; definitions: [] }[];
}

const PartOfSpeach = (props: Props) => {
  return (
    <View>
      {props.meanings.map((meaning) => (
        <View key={uid()}>
          <Text>{meaning.partOfSpeech}</Text>
          <Definitions definitions={meaning.definitions} />
        </View>
      ))}
    </View>
  );
};

export default PartOfSpeach;
