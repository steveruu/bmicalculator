import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function IndexPage() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100; // convert cm to meters
        if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
            Alert.alert(
                "Invalid input",
                "Please enter valid numbers for weight and height."
            );
            return;
        }
        const bmi = weightNum / (heightNum * heightNum);
        Alert.alert("Your BMI", `Your BMI is ${bmi.toFixed(2)}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                placeholderTextColor="#aaa"
            />
            <Pressable style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        padding: 16,
    },
    title: {
        fontSize: 32,
        marginBottom: 24,
        color: "#f5f5f5",
        fontWeight: "bold",
    },
    input: {
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 16,
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#fff",
        fontSize: 18,
        color: "#111",
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#007bff",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 90,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
