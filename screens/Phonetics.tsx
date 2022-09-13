import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Listen from "./Listen";

interface Props {
  data: { audio: string }[];
}

const Phonetics: React.FC<Props> = ({ data }) => {
  const sound_waves = require("../images/sound_waves.svg");

  return (
    <>
      {data.map(
        (el) =>
          el.audio !== "" && (
            <View key={el.audio}>
              <Text style={{ textTransform: "uppercase" }}>
                {el.audio.slice(0, -4).slice(-2)}
              </Text>
              <Listen audio={el.audio} />
            </View>
          )
      )}
    </>
  );
};
export default Phonetics;

const styles = StyleSheet.create({});
