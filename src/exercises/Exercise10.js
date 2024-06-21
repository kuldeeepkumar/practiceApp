import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web';
import { TouchableOpacity } from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Exercise10 = () => {
    return (
    <View style={styles.container}>
        {/*Example with Button: */}
        <Text style={{ marginBottom: 10 }}> my name is aashima sharma 😎🥰 </Text>
        <Button
        title="Press Me"
        color="#841584"
        onPress={() => alert("Button Clicked")}
        />

        {/* Example with TouchableOpacity: */}

        <Text style={{ marginVertical: 20 }}>
            i am student of kms college🏟🏡🏡🏠
        </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button Pressed!")}>
            <Text style={styles.buttonText}>PRESS ME</Text>
        </TouchableOpacity>
    </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItem: "center",
    },
    button: {
        backgroundcolor: "#841584",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Exercise10;