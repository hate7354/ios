/** @format */
import React from "react";
import { Alert, Keyboard } from "react-native";
import { Container, LoginDiv, LoginTouch, Id, Pw } from "../style/component";
import { Button } from "../component/button";
import { Logo } from "../component/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = ({ navigation }) => {
  const [id, changeId] = React.useState("");
  const [pw, changePw] = React.useState("");
  let param = new Object();

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  param.userID = id;
  param.userPW = pw;

  const auth = async () => {
    try {
      const URL = "http://192.168.0.150:3000/api/auth";
      const TYPE = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param),
      };
      const res = await fetch(URL, TYPE);
      let json = await res.json();
      if (json.success === "success") {
        navigation.navigate("Details");
        storeData("userID", param.userID);
      } else {
        Alert.alert("LoginFail");
      }
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
              auth();
            }}
            backgroundColor="#6286FF"
          />
          {/* <Button title="Go to Details" onPress={() => navigation.navigate("Details")} /> */}
        </LoginDiv>
      </LoginTouch>
    </Container>
  );
};
