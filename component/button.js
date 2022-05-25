/** @format */

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const styles = StyleSheet.create({
  appButtonText: {
    color: "white",
    fontSize: 14,
  },

  appButtonContainer: {
    width: 214,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export const Button = ({ onPress, title, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, backgroundColor && { backgroundColor }]}
  >
    <Text style={[styles.appButtonText]}>{title}</Text>
  </TouchableOpacity>
);
