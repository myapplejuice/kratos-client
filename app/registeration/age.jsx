import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";


export default function Age(props) {
    const [dateDisplay, setDateDisplay] = useState('MM/DD/YYYY')
    const [optionChosen, setOptionChosen] = useState(new Date())
    const [datePickerDisplay, setDatePickerDisplay] = useState(false)

    function initNext() {
        if (!optionChosen) {
            alert("Please select an option!")
            return
        }
        props.initNext()
    }

    function initBack() {
        props.initBack()
    }

    function setAge(src) {
        props.setAge(src)
    }

    return (
        <View>
            <Text style={styles.title}>
                Select your birthdate
            </Text>
            <TouchableOpacity
                style={[styles.pressable]}
            >
                <View
                    style={styles.pressableSelectionContainer}
                >
                    <Text style={styles.pressableSelection}>{dateDisplay}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={initBack}>
                    <View
                        style={{ marginBlock: "auto" }}
                    >
                        <Text style={styles.btnText}>
                            Back
                        </Text>
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
            {
                datePickerDisplay &&
                <RNDateTimePicker display="spinner" mode="date" value={optionChosen} onChange={src => setAge(src)} />
            }
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
        color: "black",
        fontFamily: "tahoma",
        letterSpacing: 1,
        fontWeight: "500",
        fontSize: 20,
        marginBlock: "auto"
    }
});