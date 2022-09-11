import React from "react";
import { Formik } from "formik";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};
export const SearchForm = (props: {
  handleSubmit: (arg0: String) => void | Promise<any>;
}) => (
  <Formik
    initialValues={{ keyword: "" }}
    onSubmit={(values, { resetForm }) => {
      props.handleSubmit(values.keyword);
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
