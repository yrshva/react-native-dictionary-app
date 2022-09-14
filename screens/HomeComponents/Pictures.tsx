import React, { useState, useEffect } from "react";
import { uid } from "uid";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";
import axios from "axios";
import { PEXELS_API_KEY } from "@env";

interface Pictures {
  src: { landscape: string };
}

const Pictures = (props: { keyword: String }) => {
  const [pictures, setPictures] = useState<Pictures[] | null>(null);
  const showPictures = (response: { data: { photos: [] } }) => {
    setPictures(response.data.photos);
  };
  useEffect(() => {
    const pexelsApisUrl = `https://api.pexels.com/v1/search?query=${props.keyword}&per_page=2`;
    axios
      .get(pexelsApisUrl, {
        headers: {
          Authorization: `Bearer ${PEXELS_API_KEY}`,
        },
      })
      .then(showPictures)
      .catch((error) => {
        console.error("error while loading pictures");
        return error;
      });
  }, [props.keyword]);
  if (pictures) {
    return (
      <View>
        {pictures.map((picture) => (
          <Image
            key={uid()}
            source={{
              uri: picture.src.landscape,
            }}
            style={{ width: 400, height: 400 }}
          />
        ))}
      </View>
    );
  } else return <ActivityIndicator size="large" color="#BEDBDB" />;
};
export default Pictures;
