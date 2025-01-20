import React from "react";
import { Image, View, StyleSheet, Text, Linking, Platform, TouchableOpacity } from "react-native";

export type RackType = {
    suburb: string,
    address: string,
    location: string,
    capacity: number,
    rack_type: string,
    latitude: number,
    longitude: number
}

type EntryProps = {
    data: RackType;
};

function openMap(lat: number, long: number) {
    const scheme = Platform.select({
        ios: `maps://?&ll=${lat},${long}`,
        android: `geo:${lat},${long}?q=${lat},${long}`
    });

    if (scheme) {
        Linking.openURL(scheme)
            .catch(err => {
                console.error(`Error opening map: ${err}`);
            });
    }
}

export default function Entry(props: EntryProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => openMap(props.data.latitude, props.data.longitude)}>
            <Image style={styles.pinImage} source={require('@/img/pin.png')}/>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{props.data.address}</Text>
                <View style={styles.rackInfo}>
                    <View style={styles.row}>
                        <Text style={styles.rackInfoText}>{props.data.rack_type}</Text>
                        <Text style={styles.rackInfoText}>Capacity: {props.data.capacity}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rackInfoText}>Lat: {props.data.latitude}</Text>
                        <Text style={styles.rackInfoText}>Long: {props.data.longitude}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#BC96E6',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        marginTop: 0,
        color: '#55286F'
    },
    rackInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    rackInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#55286F',
        marginHorizontal: 5
    },
    pinImage: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    }
});