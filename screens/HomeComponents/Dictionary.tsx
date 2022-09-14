import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import axios from "axios";

import Phonetics from "./Phonetics";
import PartOfSpeach from "./PartOfSpeach";
import Pictures from "./Pictures";

interface Word {
  phonetic: String;
  word: String;
  phonetics: [];
  meanings: [];
}

const Dictionary = (props: { keyword: String }) => {
  const [word, setWord] = useState<Word | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleResponse = (response: { data: Word[] }) => {
    setWord(response.data[0]);
  };
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error: Error) => {
        alert("Please enter a valid word");
        return error;
      });
  }, [props.keyword]);
  useEffect(() => {
    word && setIsLoading(false);
  }, [word]);
  if (!isLoading && word) {
    return (
      <View>
        {word.phonetic && (
          <View style={styles.wordWrapper}>
            <Text style={styles.word}>{word.word}</Text>
            <Text style={styles.transcription}>{word.phonetic}</Text>
          </View>
        )}
        {word.phonetics && <Phonetics data={word.phonetics} />}
        {word.meanings && <PartOfSpeach meanings={word.meanings} />}
        <Pictures keyword={props.keyword} />
      </View>
    );
  } else return <ActivityIndicator size="large" color="#BEDBDB" />;
};
export default Dictionary;

const styles = StyleSheet.create({
  wordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  word: {
    fontWeight: "bold",
    fontSize: 24,
  },
  transcription: {
    fontStyle: "italic",
    fontSize: 18,
    marginHorizontal: 10,
  },
});
