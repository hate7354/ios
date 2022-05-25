/** @format */
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2d2d3d;
`;
export const LoginTouch = styled.TouchableWithoutFeedback``;

export const LoginDiv = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 214px;
  height: 30px;
  padding: 8px 10px;
  font-size: 12px;
  color: white;
  background-color: #333344;
  border-radius: 4px;
`;

export const Id = styled(Input)`
  margin: 35px 8px 8px 8px;
`;

export const Pw = styled(Input)`
  margin: 8px 8px 35px 8px;
`;
