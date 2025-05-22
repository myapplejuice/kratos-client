//import { View } from "react-native";
//import { StyleSheet } from "react-native";
//import { useState } from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//
//export default function Homepage() {
//    const [user, setUser] = useState(getUser())
//    const [imageUrl, setImage] = useState(require('../assets/images/profile-pic.png'))
//
//    async function getUser() {
//        const USER = JSON.parse(await AsyncStorage.getItem("currentUser"))
//        setUser(USER)
//    }
//
//    return (
//        <View
//            style={{
//                flex: 1,
//                justifyContent: "center",
//                alignItems: "center",
//                backgroundColor: "#848484"
//            }}
//        >
//        <View>
//            
//        </View>
//        </View>
//    );
//}
//
//const styles = StyleSheet.create({
//    profilePic: {
//        width: 100,
//        height: 100,
//        borderRadius: 50
//    }
//});