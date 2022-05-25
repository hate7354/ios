/** @format */

import { Image } from "react-native";

export const Logo = () => {
  return (
    <>
      <Image source={require("../assets/logo.png")} />
    </>
  );
};

export const LogoIcon = () => {
  return (
    <>
      <Image style={{ width: 20, height: 20 }} source={require("../assets/icon.png")} />
    </>
  );
};
