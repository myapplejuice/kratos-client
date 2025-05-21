import { View, StyleSheet, Alert, BackHandler } from "react-native";
import { useState, useEffect } from "react";
import { useRouter, useNavigation } from "expo-router";
import Gender from "./gender";
import Age from "./age";

export default function Registeration() {
    const [currentPage, setCurrentPage] = useState("Gender")
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        //DO THIS WHEN FINISHING USER REGISTERATION
        //(async () => {
        //    const USER = JSON.parse(await AsyncStorage.getItem("currentUser"))
        //    if (USER != undefined)
        //        router.navigate('/homepage')
        //})()
        
        const handleCancel = () => {
            Alert.alert(
                "Cancel registration",
                "Are you sure you want to cancel registration and go back to login?",
                [
                    { text: "CANCEL", style: "cancel" },
                    { text: "YES", onPress: () => router.push("/login") },
                ],
                { cancelable: false }
            );
        };

        // Hardware back button handler (Android)
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                handleCancel();
                return true; // prevent default behavior
            }
        );

        // Header back button handler
        const unsubscribe = navigation.addListener("beforeRemove", (e) => {
            e.preventDefault(); // Prevent default behavior of leaving screen
            handleCancel();
        });

        return () => {
            backHandler.remove();
            unsubscribe();
        };
    }, [navigation, router]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "rgb(29, 29, 29)"
            }}
        >
            <View style={styles.dotContainer}>
                <View style={[styles.dot, currentPage == "Gender" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
                <View style={[styles.dot, currentPage == "Age" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
                <View style={[styles.dot, currentPage == "Gen" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
                <View style={[styles.dot, currentPage == "Gder" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
                <View style={[styles.dot, currentPage == "Gder" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
                <View style={[styles.dot, currentPage == "ender" ? { backgroundColor: "rgb(255, 255, 255)", width: 7, height: 7 }
                    : { backgroundColor: "rgba(255, 255, 255, 0.5)", width: 5, height: 5 }]}></View>
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