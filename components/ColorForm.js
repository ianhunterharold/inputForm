import React, {useState, useRef} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


function ColorForm( {onNewColor = f => f} ){

    const [inputValue, setValue] = useState("");
    const input = useRef();

    return(
        <View style={styles.container}>
            <TextInput 
            ref={input}
            style={styles.txtInput} 
            autoCapitalize="none"
            placeholder="enter a color"
            value={inputValue}
            onChangeText={setValue}
            >
            </TextInput>
            <Button 
            title="Add Color"
            onPress= { ()=> {
                input.current.blur();
                onNewColor(inputValue);
                setValue("");
            }}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    txtInput: {
        flex: 1,
        borderWidth: 1,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }

})



export default ColorForm;