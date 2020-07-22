import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image); //이미지를 미리 가져온다.
    } else {
      return Asset.fromModule(image).downloadAsync(); //
    }
  });

const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]); //캐시폰트에 폰트를 주고 그폰트를 로드한다.

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    //promise를 리턴해주어야한다.
    const images = cacheImages([
      //images는 이미지들의 배열이여야한다.옵션이 두가지(url, asset)일수있다.
      "https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]); //많은 promise들의 하나의 배열을 만든다.
  };
  const onFinish = () => setIsReady(true);
  return isReady ? ( //참이면 네비게인션을 보여주고 준비가 안됐다면 appLoading을 보여준다.
    //NavigationContainer안에 Stack을 렌더해주어야한다.
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading //splash screen을 보여준다. api를 얻거나 사용자를 보여주거나 이미지들을 미리 로드할수 있다.
      startAsync={loadAssets} //apploading은 loadAssets를 위해서 기다려준다.
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
