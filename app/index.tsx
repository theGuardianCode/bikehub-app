import React from "react";
import { Image, Text, StyleSheet, View, TouchableHighlight, TouchableNativeFeedback } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.body}>
      <View style={styles.buttons}>
        <TouchableNativeFeedback onPress={() => router.push('/help')}><Image style={styles.topImages} source={require('@/img/help.png')}/></TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => router.push('/search')}><Image style={styles.topImages} source={require('@/img/search.png')}/></TouchableNativeFeedback>
      </View>
      <Text style={styles.title}>BikeHub Brisbane</Text>
      <Image style={styles.bikeImage} source={require('@/img/bike.png')}/>
      <TouchableHighlight
        style={styles.homepageButtons}
        onPress={() => router.push("/racks")}
      >
        <Text style={styles.buttonText}>FIND NEAREST RACK</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.homepageButtons}
        onPress={() => router.push("/map")}
      >
        <Text style={styles.buttonText}>OPEN CITY MAP</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 15,
    color: '#55286F'
  },
  homepageButtons: {
    borderRadius: 40,
    backgroundColor: '#55286F',
    paddingVertical: 15,
    paddingHorizontal: 20,
    boxShadow: '3px 5px #210B2C',
    margin: 20
  },
  buttonText: {
    color: '#BC96E6',
    fontWeight: 'bold'
  },
  topImages: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '95%'
  },
  bikeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});