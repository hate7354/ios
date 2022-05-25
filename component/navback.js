/** @format */

import React from "react";
import styled from "styled-components/native";
import { LogoIcon } from "./logo";

const Pressable = styled.Pressable``;

export const HeaderLeftGoBack = navigation => {
  return (
    <Pressable onPress={() => navigation.popToTop()} hitSlop={8}>
      <LogoIcon />
    </Pressable>
  );
};
