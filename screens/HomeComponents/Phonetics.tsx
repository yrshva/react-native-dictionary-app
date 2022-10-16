import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Listen from "./Listen";

interface Props {
  data: { audio: string }[];
}

const Phonetics: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.accentWrapper}>
      {data.map(
        (el) =>
          el.audio !== "" && (
            <View style={styles.accent} key={el.audio}>
              <Text style={styles.accentCountry}>
                {el.audio.slice(0, -4).slice(-2)}
              </Text>
              <Listen audio={el.audio} />
            </View>
          )
      )}
    </View>
  );
};
export default Phonetics;

const styles = StyleSheet.create({
  accentWrapper: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
  },
  accent: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  accentCountry: {
    textTransform: "uppercase",
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
});
