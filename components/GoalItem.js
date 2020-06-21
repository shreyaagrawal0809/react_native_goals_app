import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';



const GoalItem = props => {

    return(
            <TouchableOpacity activeOpacity = {0.8} onPress = {props.onDelete.bind(this, props.id)}>
                
                <View style = {styles.listItem}>
                
                    <Text>{props.title}</Text> 
            
            </View>
          </TouchableOpacity>
    );
};

const styles =  StyleSheet.create({

    listItem :{
        padding : 10,
        margin: 10,
        backgroundColor: "grey",
        borderColor:"black",
        borderWidth:1
      }


});

export default GoalItem;