import React from "react";
import { Formik } from "formik";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

export const SearchForm = (props: { handleSubmit: (arg0: string) => void }) => (
  <Formik
    initialValues={{ keyword: "" }}
    onSubmit={(values, { resetForm }) => {
      values.keyword !== "" && /^[a-zA-Z-\s]*$/.test(values.keyword)
        ? props.handleSubmit(values.keyword)
        : alert("Only latin letters, dash and space are allowed");
      resetForm();
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          placeholder="Start typing.."
          onChangeText={handleChange("keyword")}
          onBlur={handleBlur("keyword")}
          value={values.keyword}
        />
        <Button
          title="Submit"
          color="black"
          onPress={
            handleSubmit as unknown as (event: GestureResponderEvent) => void
          }
        />
      </View>
    )}
  </Formik>
);
