import { router } from "expo-router";
import { View, Image, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const KEYFRAME = useState()

  useEffect(() => {
    setTimeout(() => { router.navigate('/login') }, 2000)
  }, [])

  const styles = StyleSheet.create({
    logo: {
      width: 300,
      height: 300,
    }
  });

  return (<View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(29, 29, 29)"
    }}
  >
    <Image /*style={styles.logo} source={require('../assets/images/logo.png')}*//>
    <Text style={{color: "#F25B36"}}>LOGO HERE, REMOVE TEXT LATER</Text>
  </View>
  )
}