import React from "react";
import { Formik } from "formik";
import {
  View,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { FlatButton } from "../../shared/FlatButton";

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
      <View style={styles.form}>
        <TextInput
          placeholder="Start typing.."
          onChangeText={handleChange("keyword")}
          onBlur={handleBlur("keyword")}
          value={values.keyword}
          style={styles.input}
        />
        <FlatButton
          text="Submit"
          onPress={
            handleSubmit as unknown as (event: GestureResponderEvent) => void
          }
        />
      </View>
    )}
  </Formik>
);
const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#BEDBDB",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
