import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import * as Location from 'expo-location';

import Header from "@/components/header";
import RacksList from "@/components/racksList";

import { RackType } from "@/components/entry";

async function sortRacks(arr: RackType[]) {
    let lat = 0;
    let long = 0;
    try {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            throw "Permission Denied";
        }

        const location = await Location.getCurrentPositionAsync({});
        lat = location.coords.latitude;
        long = location.coords.longitude;
    } catch (error) {
        console.log(`location not available: ${error}`);
    }
    console.log(`lat: ${lat}, long: ${long}`)

    let result = arr;
    result.sort((a, b) => {
        const distA = Math.sqrt((a.latitude - lat) * (a.latitude - lat) + (a.longitude - long) * (a.longitude - long));
        const distB = Math.sqrt((b.latitude - lat) * (b.latitude - lat) + (b.longitude - long) * (b.longitude - long));

        if (distA < distB) {
            return -1;
        } else if (distA > distB) {
            return 1;
        } else {
            return 0;
        }
    })
    return result;
}

async function fetchRacks(): Promise<RackType[]> {
    let offset = 0;
    let limit = 100;
    
    let unsortedRacks: RackType[] = [];
    
    while (limit > 0) {
        let url = `https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/bicycle-racks/records?select=suburb%2C%20address%2C%20location%2C%20capacity%2C%20rack_type%2C%20latitude%2C%20longitude&limit=${limit}&offset=${offset}`
        
        const res = await fetch(url);
        const data = await res.json();
    
        unsortedRacks = unsortedRacks.concat(data.results);

        offset += limit;
        limit = data.total_count - offset;
    }
    
    
    const racks = await sortRacks(unsortedRacks);
    return racks;
}

export default function Racks() {
    const [loaded, setLoaded] = useState(false);
    const [racks, setRacks] = useState<RackType[]>([]);

    useEffect(() => {
        fetchRacks()
            .then(racks => {
                setRacks(racks);
                setLoaded(true);
            })
    }, [])
    

    return (
        <>
            <Header text="Nearest Racks"/>
            {loaded ? <RacksList data={racks}/> : <Text>Loading...</Text> }
        </>
    );
}