import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchForm } from "./SearchForm";

export const Home = () => {
  const [keyword, setKeyword] = useState<String | null>(null);

  const handleSubmit = (value: String) => {
    setKeyword(value);
  };
  useEffect(() => console.log(keyword), [keyword]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>What word would you like to look up?</Text>
      <SearchForm handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignSelf: "center",
  },
});
