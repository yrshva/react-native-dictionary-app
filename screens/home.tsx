import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Dictionary from "./Dictionary";
import { SearchForm } from "./SearchForm";

export const Home = () => {
  const [keyword, setKeyword] = useState<String | null>(null);
  const handleSubmit = (value: String) => {
    setKeyword(value);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>What word would you like to look up?</Text>
      <SearchForm handleSubmit={handleSubmit} />
      {keyword != null && <Dictionary keyword={keyword} />}
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
