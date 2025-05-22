import { Platform, Text, TextInput, View, TouchableOpacity, Dimensions, SafeAreaView, Alert, BackHandler, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const width = Dimensions.get('window').width

    useEffect(() => {
        //DO THIS WHEN FINISHING USER REGISTERATION
        //(async () => {
        //    const USER = JSON.parse(await AsyncStorage.getItem("currentUser"))
        //    if (USER != undefined)
        //        router.navigate('/homepage')
        //})()

        if (Platform.OS === "android") {
            const onBackPress = () => {
                Alert.alert(
                    'Exit App',
                    '\nAre you sure you want to exit the app?',
                    [
                        { text: 'CANCEL', style: 'cancel' },
                        {
                            text: 'YES',
                            onPress: () => BackHandler.exitApp()
                        }
                    ],
                    { cancelable: false }
                );
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => backHandler.remove();
        }
    }, []);

    async function initSignIn() {
        if (validateUserInputs()) {
            const USERS = JSON.parse(await AsyncStorage.getItem('users'))
            if (USERS != null) {
                const USER = USERS.find(arr => arr.username == username)
                if (USER != undefined)
                    if (USER.password == password) {
                        await AsyncStorage.setItem('currentUser', JSON.stringify(USER))
                        confirm("Login successful!")
                        router.navigate('/homepage')
                        return
                    }
            }
            alert("One or both fields are incorrect!")
        }
    }

    function validateUserInputs() {
        if (username == "" && password == "") {
            alert("Please fill in all fields!")
            return false
        }
        return true
    }

    return (
        <SafeAreaView style={styles.mainView}>
            <View style={{ flex: 6, justifyContent: "center", alignItems: "center", width: width }}>
                <Text style={styles.introTitle}>The Kratos Hub</Text>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput
                    onChangeText={(value) => setUsername(value)}
                    placeholder="Username"
                    placeholderTextColor={"white"}
                    style={[styles.input, { outline: 'none' }]}
                />
                <TextInput
                    onChangeText={(value) => setPassword(value)}
                    placeholder="Password"
                    placeholderTextColor={"white"}
                    style={[styles.input, { outline: 'none' }]}
                />
                <Link
                    href=""
                    style={{ color: "#F25B36", marginBlock: 10 }}>
                    Forgot password
                </Link>
                <TouchableOpacity
                    onPress={() => router.replace("/registeration")}
                    style={styles.linkContainer}
                >
                    <Text style={styles.span}>Don't have an account?{"\n"}<Text style={styles.link}>Start here</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={initSignIn}>
                    <View style={{ marginBlock: "auto" }}>
                        <Text style={styles.btnText}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ color: "white", textAlign: "center", alignSelf: "center", flex: 1 }}>By continuing, you agree to our <Text style={{ color: "#F25B36" }}>Terms of Service</Text> and <Text style={{ color: "#F25B36" }}>Privacy Policy</Text></Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(29, 29, 29)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    introTitle: {
        fontFamily: "monospace",
        fontWeight: "900",
        letterSpacing: 0,
        margin: 20,
        fontSize: 30,
        color: "#F25B36"
    },
    title: {
        marginBottom: 100,
        fontFamily: "monospace",
        fontSize: 30,
        color: "white"
    },
    viewItems: {
        margin: 10
    },
    input: {
        width: "85%",
        borderRadius: 10,
        color: "white",
        padding: 10,
        margin: 10,
        backgroundColor: "rgb(23, 21, 21)"
    },
    button: {
        backgroundColor: "#F25B36",
    },
    linkContainer: {
        marginBlock: 10,
    },
    link: {
        color: "#F25B36",
        borderBottom: "1px solid #F25B36",
        textAlign: "center"
    },
    span: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    btn: {
        alignItems: "center",
        marginBlock: 20,
        marginInline: "auto",
        backgroundColor: "#F25B36",
        borderRadius: 5,
        width: 150,
        height: 40
    },
    btnText: {
        color: "black",
        letterSpacing: 1,
        fontWeight: "500",
        fontSize: 20,
        marginBlock: "auto"
    }
});