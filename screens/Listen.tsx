import * as React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

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

  return <Button title="Listen" color="black" onPress={playSound} />;
};
export default Listen;
