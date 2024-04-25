import React from "react";
import data from './Data';
import Square from "./Square";
import style from "./style";
import { ScrollView, Text,StyleSheet,Button,Alert, } from "react-native";

export default App=()=>{
    return(
        <ScrollView style = {style.container}>
            {data.map((item,index) => (
                <Square key ={item} text={`Square ${index +1}`}/>
            ))}
        </ScrollView>
    );
};