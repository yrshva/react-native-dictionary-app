import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";
import Listen from "./Listen";
import Phonetics from "./Phonetics";

const Dictionary = (props: { keyword: String }) => {
  const [word, setWord] = useState<any>(null);
  function handleResponse(response: { data: any[] }) {
    setWord(response.data[0]);
  }
  useEffect(() => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrl).catch(() => {
      alert("Please enter a valid word");
    });
  }, [props.keyword]);

  if (word) {
    return (
      <View>
        {word.phonetic && <Text>{word.phonetic}</Text>}

        {word.phonetics && <Phonetics data={word.phonetics} />}
      </View>
    );
  } else return <ActivityIndicator size="large" color="#00ff00" />;
};
export default Dictionary;
