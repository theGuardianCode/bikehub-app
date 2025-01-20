import React from "react";
import Header from "@/components/header";
import { Text, StyleSheet } from "react-native";

export default function Help() {
    return (
        <>
            <Header text="Help"/>
            <Text style={styles.title}>How to find a bike rack: </Text>
            <Text style={styles.content}>
                To automatically find the closest bike rack to your location, click on the 'FIND NEAREST RACK' button on the home page.{"\n"}{"\n"}
                It is also possible to search for a specific location and find bike racks close-by. You can do this by returning to the home page and clicking on the search icon and inputting the street address of the desired location.{"\n"}{"\n"}
                You can also browse the map by clicking on the 'OPEN CITY MAP' button on the home page. This displays a map of the Brisbane CBD with all known bike racks highlighted. Click on one of the pins to see more information about this location, such as the rack type and capacity.
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#55286F'
    },
    content: {
        fontSize: 20,
        color: '#55286F'
    }
});