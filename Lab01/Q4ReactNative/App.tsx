import React from "react";
import data from './Data';
import Square from "./Square";
import styles from "./style";
import { ScrollView, Text,StyleSheet,Button,Alert, } from "react-native";

export default App=()=>{
    return(
        <ScrollView style = {styles.container}>
            {data.map((item,index) => (
                <Square key ={item} text={`Square ${index +1}`}/>
            ))}
        </ScrollView>
    );
};