import { View, StyleSheet, Alert, BackHandler, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useRouter, useNavigation } from "expo-router";
import Gender from "./gender";
import Age from "./age";

export default function Registeration() {
    const [currentPage, setCurrentPage] = useState("Gender")
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const router = useRouter();
    const selectedStyle = { backgroundColor: "white", width: 7, height: 7 };
    const unselectedStyle = { backgroundColor: "rgba(255,255,255,0.5)", width: 5, height: 5 };

    useEffect(() => {
        //DO THIS WHEN FINISHING USER REGISTERATION
        //(async () => {
        //    const USER = JSON.parse(await AsyncStorage.getItem("currentUser"))
        //    if (USER != undefined)
        //        router.navigate('/homepage')
        //})()

        if (Platform.OS === "android") {
            const handleCancel = () => {
                Alert.alert(
                    'Cancel Registration',
                    '\nAre you sure you want to cancel registration?\nAll information will be reset!',
                    [
                        { text: "CANCEL", style: "cancel" },
                        {
                            text: "YES",
                            onPress: () => {
                                setTimeout(() => {
                                    router.replace('login');
                                }, 100);
                            },
                        },
                    ],
                    { cancelable: false }
                );
            };

            const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
                handleCancel();
                return true;
            });

            return () => backHandler.remove();
        }
    }, [router]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "rgb(29, 29, 29)"
            }}
        >
            <View style={styles.dotContainer}>
                <View style={[styles.dot, currentPage == "Gender" ? selectedStyle : unselectedStyle]}></View>
                <View style={[styles.dot, currentPage == "Age" ? selectedStyle : unselectedStyle]}></View>
                <View style={[styles.dot, currentPage == "Gen" ? selectedStyle : unselectedStyle]}></View>
                <View style={[styles.dot, currentPage == "Gder" ? selectedStyle : unselectedStyle]}></View>
                <View style={[styles.dot, currentPage == "Gder" ? selectedStyle : unselectedStyle]}></View>
                <View style={[styles.dot, currentPage == "ender" ? selectedStyle : unselectedStyle]}></View>
            </View>
            <View style={currentPage == "Gender" ? {} : { display: "none" }}>
                <Gender setGender={(src) => setGender(src)} initNext={() => setCurrentPage("Age")} />
            </View>
            <View style={currentPage == "Age" ? {} : { display: "none" }}>
                <Age setAge={(src) => { setAge(src) }} initBack={() => setCurrentPage("Gender")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dotContainer: {
        display: "flex",
        flexDirection: "row",
        marginBlock: 40
    },
    dot: {
        borderRadius: 50,
        marginInline: 5,
        marginBlock: 'auto'
    },
});