/** @format */
import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import { Container } from "../style/component";
import { Button } from "../component/button";
import { Detail } from "../component/detail";
import { HeaderLeftGoBack } from "../component/navback";
import { useNavigation } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";

export const DetailsScreen = () => {
  const navigation = useNavigation();

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
  return (
    <Container>
      <Text>Details Screen</Text>
      <Button title="Go to Details again" onPress={() => navigation.push("Details")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </Container>
  );
};
