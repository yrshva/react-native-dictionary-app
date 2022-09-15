import React from "react";
import { useState } from "react";
import { ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { SearchForm } from "./HomeComponents/SearchForm";
import Dictionary from "./HomeComponents/Dictionary";

export const Home = () => {
  const [keyword, setKeyword] = useState<String | null>(null);
  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_500Medium,
  });
  const handleSubmit = (value: String) => {
    setKeyword(value);
  };
  if (fontsLoaded) {
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.header]}>
          What word would you like to look up?
        </Text>
        <SearchForm handleSubmit={handleSubmit} />
        {keyword != null && <Dictionary keyword={keyword} />}
      </ScrollView>
    );
  } else return <ActivityIndicator size="large" color="#BEDBDB" />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ECF8F8",
  },
  header: {
    alignSelf: "center",
    fontFamily: "Inter_500Medium",
    fontSize: 18,
  },
});
