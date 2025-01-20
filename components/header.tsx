import React from "react";
import { View, Image, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type HeaderProps = {
    text: string;
};

export default function Header(props: HeaderProps) {
    const router = useRouter()

    return (
        <View style={styles.header}>
            <TouchableNativeFeedback onPress={() => router.back()}>
                <Image style={styles.headerArrow} source={require('@/img/arrow.png')}/>
            </TouchableNativeFeedback>
            <Text style={styles.headerText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#BC96E6',
        borderBottomColor: '#55286F',
        borderBottomWidth: 5
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#55286F'
    },
    headerArrow: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    }
});