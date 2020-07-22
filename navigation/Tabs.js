import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Tv from "../screens/Tv";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();
//props에는 navigator 말고도 route가 있는데 우리가 어디에 있는지 알 수 있게 해준다.
//tabsnavigator에서 stack.navigator의 title을 바꿀수 잇다는 의미
const getHeaderName = (route) =>
  //?는 optional chaining이다. 만약 route라면, 만약 state라면, 이라는뜻
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  //layout변경이 다 끝난다음 실행된다.
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    //component를 지정하면 자동으로 import된다.
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
