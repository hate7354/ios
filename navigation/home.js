/** @format */
import React from "react";
import { Keyboard } from "react-native";
import { Container, LoginDiv, LoginTouch, Id, Pw } from "../style/component";
import { Button } from "../component/button";
import { Logo } from "../component/logo";

export const HomeScreen = ({ navigation }) => {
  const [id, changeId] = React.useState("");
  const [pw, changePw] = React.useState("");
  const hi = "";
  const test = async () => {
    try {
      const URL = "http://192.168.0.150:3000/api/get/demo";
      const res = await fetch(URL);
      let json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Logo />
      <LoginTouch onPress={Keyboard.dismiss}>
        <LoginDiv>
          <Id placeholder="ID" placeholderTextColor="white" onChangeText={changeId} value={id} />
          <Pw
            placeholder="PW"
            placeholderTextColor="white"
            onChangeText={changePw}
            value={pw}
            secureTextEntry
          />
          <Button
            title="로그인"
            onPress={() => {
              test();
            }}
            backgroundColor="#6286FF"
          />
          <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
        </LoginDiv>
      </LoginTouch>
    </Container>
  );
};
