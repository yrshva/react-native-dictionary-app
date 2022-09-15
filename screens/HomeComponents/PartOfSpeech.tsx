import React from "react";
import { uid } from "uid";
import { View, Text, StyleSheet } from "react-native";
import Definitions from "./Definitions";

interface Props {
  meanings: { partOfSpeech: string; definitions: [] }[];
}

const PartOfSpeach = (props: Props) => (
  <>
    {props.meanings.map((meaning) => (
      <View key={uid()}>
        <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
        <Definitions definitions={meaning.definitions} />
      </View>
    ))}
  </>
);

export default PartOfSpeach;

const styles = StyleSheet.create({
  partOfSpeech: {
    marginVertical: 10,
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    textTransform: "capitalize",
  },
});
