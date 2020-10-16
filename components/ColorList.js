import React, { useState } from "react";
import { StyleSheet, FlatList,View, Text } from "react-native";

import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import { useColors } from '../hooks.js';

// import { GestureHandler } from 'expo';

import Swipeable from 'react-native-gesture-handler/Swipeable';


export default function ColorList({ navigation }) {

    const [backgroundColor, setBackgroundColor] = useState("black");
    const {colors, addColor } = useColors();
    
    const renderLeftActions = () => {
        return (
            <View style={styles.renderRight}>
                <Text style={styles.actionText}>
                    scroll right
                </Text>
        </View>
        )
    }

    const renderRightActions = () => {
        return(
            <View style={styles.renderLeft}>
                <Text style={styles.actionText}>
                    scroll left
                </Text>
            </View>
        )
    }

    return (
        <>
            <ColorForm 
                onNewColor={addColor}
            />
            <FlatList style={styles.container} 
            onSwipeFromLeft ={()=> console.log("you swiped from left")}
            onRightPress = {()=> console.log("you swiped right and pressed on right")}
            data = {colors}
            renderItem={ ({item}) => {
            return (
                    <Swipeable
                        renderLeftActions={renderLeftActions}
                        renderRightActions={renderRightActions}
                    >
                        <ColorButton 
                            key={item.id} 
                            backgroundColor={item.color} 
                            onPress={() => navigation.navigate("Details",{color: item.color})} 
                        />
                    </Swipeable>
            )
            }}
            />
        </>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    renderRight: {
        backgroundColor: 'green',
        justifyContent: 'center',
        flex: 1
    },
    renderLeft: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: "flex-end",
        flex: 1,
    }, 
    actionText: {
        color: '#fff',
        fontWeight: "600",
        padding: 20,
    },

});
