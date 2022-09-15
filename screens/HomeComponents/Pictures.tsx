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
      <View style={styles.imageWrapper}>
        {pictures.map((picture) => (
          <View key={uid()} style={styles.shadow}>
            <Image
              source={{
                uri: picture.src.landscape,
              }}
              style={styles.image}
            />
          </View>
        ))}
      </View>
    );
  } else return <ActivityIndicator size="large" color="#BEDBDB" />;
};
export default Pictures;

const styles = StyleSheet.create({
  imageWrapper: {
    paddingBottom: 60,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    resizeMode: "cover",
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: "#BEDBDB",
    borderWidth: 5,
  },
});
