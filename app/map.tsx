import React from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";

import Header from "@/components/header";

export default function Map() {
  return (
    <>
      <Header text="City Map"/>
      <WebView source={{uri: 'https://bikehub-9ofu.onrender.com/mapView'}}/>
    </>
  );
}