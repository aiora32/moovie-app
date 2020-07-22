import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  //navigate로 라우팅 가능하다 이름을 항상 적어준다.
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Text>Movies</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
