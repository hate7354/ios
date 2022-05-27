/** @format */
import React, { useLayoutEffect, useEffect } from "react";
import { Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Container } from "../style/component";
import { Button } from "../component/button";
import { Detail } from "../component/detail";
import { HeaderLeftGoBack } from "../component/navback";
import { useNavigation } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";
const userData = async () => {
  try {
    const value = await AsyncStorage.getItem("userID");
    if (value !== null) {
      console.log(value);
    } else {
      navigation.popToTop();
    }
  } catch (error) {}
};

export const DetailsScreen = () => {
  const navigation = useNavigation();
  const [testJson, changeTestJson] = React.useState([]);
  const [loding, setLoding] = React.useState(false);
  const [openImgCnt, setImgCnt] = React.useState(0);
  const [openImg, setImg] = React.useState(false);
  let param = { startNum: 100, scope: 100 };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "black",
      },
      headerShadowVisible: false,
      headerLeft: () => HeaderLeftGoBack(navigation),
      headerRight: () => <Detail />,

      headerLeftContainerStyle: {
        padding: 16,
      },
      headerRightContainerStyle: {
        padding: 16,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      detachPreviousScreen: false,
    });
  }, [navigation]);

  const event = async () => {
    setLoding(true);
    if (testJson.length != 0) {
      changeTestJson([]);
      setLoding(false);
      return;
    }
    try {
      const URL = "http://192.168.0.150:3000/api/event";
      const TYPE = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param),
      };
      const res = await fetch(URL, TYPE);
      let json = await res.json();
      setLoding(false);
      const test1 = [];
      json.forEach((ele, idx) => {
        test1.push(ele);
      });
      changeTestJson(test1);
    } catch (error) {
      console.log(error);
    }
  };
  const eventDetail = idx => {
    if (openImgCnt === idx) {
      setImg(true);
      if (openImg) {
        setImg(false);
      }
    } else {
      setImgCnt(idx);
      setImg(false);
      setImg(true);
    }
  };

  useEffect(() => {
    event();
  }, []);

  return (
    <Container>
      <Text>Details Screen</Text>
      <Button title="Go to Details again" onPress={() => userData()} />
      <Button title="Go to Home" onPress={() => userData()} />
      <Button title="Go Back" onPress={() => userData()} />
      <Button title="Go back to first screen in stack" onPress={() => userData} />
      <Button title="이벤트 불러오기" onPress={() => event()} />
      <ScrollView style={{ width: "100%", height: 30 }}>
        {loding ? (
          <Progress.Circle indeterminate={true} size={50} />
        ) : (
          testJson.map((ele, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                style={{
                  backgroundColor: "skyblue",
                  padding: 10,
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                }}
                onPress={() => eventDetail(idx)}
              >
                <Text>{ele.camera_name}</Text>
                <Text>{ele.alarm_type}</Text>
                <Text>{ele.occurrence_date}</Text>
                {openImg ? (
                  openImgCnt === idx ? (
                    <>
                      <Image
                        style={{ width: 200, height: 200, resizeMode: "contain" }}
                        source={{ uri: `${ele.obj_path}` }}
                      />
                      {console.log(ele.obj_path)}
                    </>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </Container>
  );
};
