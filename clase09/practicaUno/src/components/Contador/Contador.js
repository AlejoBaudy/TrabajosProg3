import React, { Component } from "react";
import {View, Text, Pressable} from "react-native"
import { StyleSheet } from "react-native";
class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0
        }
    }
    sumar(){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    render(){
        return(
         <View style={styles.container}>
            <Text>{this.state.contador}</Text> 
            <Pressable bottom={styles.boton} onPress={() => this.sumar()}>
                <Text>Suma</Text>
            </Pressable>
         </View>
        )
       
    }
}
 const styles= StyleSheet.create({
            container:{
                marginTop: 5,
                marginBottom: 5,

            },
            bottom: {
                padding: 7,
                color: (0, 255, 0, 0.5),
                marginBottom: 10,
                borderRadius: 4,
            }
        })
export default Contador