import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
//스택 네비게이션은 다른 것들 위에 있는 것들이다.
const Stack = createStackNavigator(); //스택은 createStackNavigator와 같다.

export default () => (
  //screen은 컴포넌트가 필요하다. 꼭 이름을 주어야한다.
  //Stack.Navigator가 항상 하위 Stack.Screen에게 prop(navigation)을 준다.
  //Navigator의 모든 screen 들은 navigation이란 prop에 접근권을 가지고 있다.
  //component는 불려지고 screen은 props를 보낸다.
  //stack안에 tabs들이 있도록 해주었다.
  //screenOptions는 모든 screen에 대한 style을 정할 수있다.
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tab" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
