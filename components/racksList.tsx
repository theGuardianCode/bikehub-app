import React from "react";
import { FlatList } from "react-native";

import Entry from "./entry";
import { RackType } from "./entry";

type RacksListProps = {
    data: RackType[];
};

export default function RacksList(props: RacksListProps) {
    return (
        <>
            <FlatList
                data={props.data}
                renderItem={({item}) => <Entry data={item}/>}
            />
        </>
    );
}