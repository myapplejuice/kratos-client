import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Alert } from "react-native";

export default function Gender(props) {
    const [optionChosen, setOptionChosen] = useState(false)

    function initNext() {
        if (!optionChosen) {
            Alert.alert(
                "Missing Information",
                "Please choose a gender!",
                [
                    { text: "OK" },
                ],
                { cancelable: false }
            );
            return
        }
        props.initNext()
    }

    function setGender(src) {
        setOptionChosen(src)
        props.setGender(src)
    }

    return (
        <View>
            <View>
                <Text style={styles.title}>
                    Select your gender
                </Text>
                <TouchableOpacity
                    style={[styles.pressable, optionChosen == "Female" ? { borderColor: "#F25B36" } : {}]}
                    onPress={() => setGender("Female")}>
                    <View
                        style={styles.pressableSelectionContainer}
                    >
                        <Text style={[styles.pressableSelection, optionChosen == "Female" ? { color: "#F25B36" } : {}]}>
                            Female
                        </Text>
                        <Text style={[{ marginBlock: "auto", color: "#F25B36", paddingInline: 7 }, optionChosen == "Female" ? { display: "unset" } : { display: "none" }]}>✔</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.pressable, optionChosen == "Male" ? { borderColor: "#F25B36" } : {}]}
                    onPress={() => setGender("Male")}>
                    <View
                        style={styles.pressableSelectionContainer}
                    >
                        <Text style={[styles.pressableSelection, optionChosen == "Male" ? { color: "#F25B36" } : {}]}>
                            Male
                        </Text>
                        <Text style={[{ marginBlock: "auto", color: "#F25B36", paddingInline: 7 }, optionChosen == "Male" ? { display: "unset" } : { display: "none" }]}>✔</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={initNext}>
                    <View
                        style={{ marginBlock: "auto" }}
                    >
                        <Text style={styles.btnText}>
                            Next
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#F25B36",
        textAlign: "center",
        fontFamily: "tahoma",
        letterSpacing: 1,
        fontWeight: "500",
        fontSize: 40,
        margin: 10,
        marginBottom: 50
    },
    pressable: {
        alignSelf: "center",
        textAlign: "left",
        padding: 10,
        margin: 10,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 3,
        width: 350,
        height: "fit-content"
    },
    pressableSelectionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    pressableSelection: {
        fontSize: 20,
        color: "gray",
        fontWeight: "bold",
        height: "fit-content",
        marginBlock: "auto",
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
        color: "white",
        fontFamily: "tahoma",
        letterSpacing: 1,
        fontWeight: "500",
        fontSize: 20,
        marginBlock: "auto"
    }
});