//import { Button, Image, Text, TextInput, TouchableHighlight, View, StyleSheet } from "react-native";
//import { useState } from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import User from "../objects/user";
//import { Link, router } from "expo-router";
//
//import img from '../../assets/images/profile-pic.png';
//
//export default function Personal() {
//    const [username, setUsername] = useState()
//    const [firstname, setFirstname] = useState()
//    const [lastname, setLastname] = useState()
//    const [email, setEmail] = useState()
//    const [phone, setPhone] = useState()
//    const [password, setPassword] = useState()
//    const [confirmPass, setConfirmPass] = useState()
//    const [imageUrl, setImage] = useState({uri: img}) 
//
//    function initSignUp() {
//        if (!username == ""
//            && !firstname == ""
//            && !lastname == ""
//            && !email == ""
//            && !phone == ""
//            && !password == ""
//            && !confirmPass == "")
//            try {
//                if (confirmPass != password) {
//                    alert("Password does not match!")
//                    return
//                }
//                updateDatabase()
//            } catch (e) {
//                alert(e.message)
//            }
//        else
//            alert("Please fill in all fields!")
//    }
//
//    async function updateDatabase() {
//        const USERS = JSON.parse(await AsyncStorage.getItem('users'))
//        if (USERS != null) {
//            USERS.push(new User(username, firstname, lastname, email, phone, password))
//            await AsyncStorage.setItem('users', JSON.stringify(USERS))
//        }
//        else
//            await AsyncStorage.setItem('users', JSON.stringify([new User(username, firstname, lastname, email, phone, password)]))
//        confirm("Login successful!")
//        router.navigate('/homepage')
//    }
//
//    function initImage() {
//        //TAKE IMAGE BY CAMERA
//    }
//
//    return (
//        <View
//            style={{
//                flex: 1,
//                justifyContent: "center",
//                alignItems: "center",
//                backgroundColor: "#4c4c4c"
//            }}
//        >
//            <View style={styles.personalDetails}>
//                <Text
//                    style={[styles.title, { marginBlock: 10 }]}>
//                    REGISTER</Text
//                >
//                <TouchableHighlight
//                    style={{ borderRadius: 50 }}
//                    onPress={initImage}>
//                    <Image
//                        style={styles.profilePic}
//                        source={imageUrl}
//                    />
//                </TouchableHighlight>
//                <TextInput
//                    onChangeText={(value) => setUsername(value)}
//                    placeholder="Username"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setFirstname(value)}
//                    placeholder="Firstname"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setLastname(value)}
//                    placeholder="Lastname"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setEmail(value)}
//                    placeholder="Email"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setPhone(value)}
//                    placeholder="Phone"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setPassword(value)}
//                    placeholder="Password"
//                    style={styles.input}
//                />
//                <TextInput
//                    onChangeText={(value) => setConfirmPass(value)}
//                    placeholder="Confirm Password"
//                    style={styles.input}
//                />
//                <Link
//                    href="/login"
//                    style={[styles.link, { borderBottom: "1px solid black" }]}>
//                    Already have an account?
//                </Link>
//                <View
//                    style={{ marginBlock: 10, width: 200 }}
//                >
//                    <Button
//                        onPress={initSignUp}
//                        title="SUBMIT"
//                    />
//                </View>
//            </View>
//        </View>
//    );
//}
//
//const styles = StyleSheet.create({
//    title: {
//        fontFamily: "Monospace",
//        fontSize: 30
//    },
//    personalDetails: {
//        display: "flex",
//        flexDirection: "column",
//        justifyContent: "center",
//        alignItems: "center",
//        width: "fit-content",
//        height: "100vh",
//        backgroundColor: "#A2A2A2",
//        paddingInline: "10px",
//        paddingBlock: "30px",
//        borderRadius: 5,
//        boxShadow: "0px 0px 20px 10px rgba(0,0,0,0.75)"
//    },
//    viewItems: {
//        margin: 10
//    },
//    input: {
//        width: 300,
//        borderStyle: "solid",
//        borderColor: "black",
//        borderWidth: 1,
//        padding: 3,
//        margin: 8,
//        backgroundColor: "white"
//    },
//    profilePic: {
//        width: 100,
//        height: 100,
//        borderRadius: 50
//    },
//    link: {
//        marginBlock: 10,
//        padding: 5
//    }
//});