import * as React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { FlatButton } from "../../shared/FlatButton";

const Listen = (props: { audio: string }) => {
  const [sound, setSound] = useState<Sound | undefined>();
  async function playSound() {
    //loading sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: props.audio },
      { shouldPlay: true }
    );
    setSound(sound);
    //playing sound
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          //unloading sound
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <FlatButton text="Listen" onPress={playSound} />;
};
export default Listen;
