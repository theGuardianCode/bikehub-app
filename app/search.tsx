import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import Header from "@/components/header";
import RacksList from "@/components/racksList";

export default function Search() {
    const [text, setText] = useState('');
    const [racks, setRacks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function onInput(newText: string) {
        setText(newText);

        fetch(`https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/bicycle-racks/records?select=suburb%2C%20address%2C%20location%2C%20capacity%2C%20rack_type%2C%20latitude%2C%20longitude&where=address%20like%20%22*${newText}*%22`)
            .then(res => res.json())
            .then((data) => {
                setRacks(data.results);
                setLoaded(true);
            });
    }

    return (
        <>
            <Header text="Search"/>
            <TextInput style={styles.searchBar} onChangeText={onInput} value={text}/>
            {loaded ? <RacksList data={racks}/> : <Text></Text>}
        </>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#FFFFFF',
        margin: 15,
        padding: 10,
        borderRadius: 15
    }
});