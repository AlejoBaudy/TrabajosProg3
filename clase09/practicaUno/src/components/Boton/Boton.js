import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
class Boton extends Component{
    constructor(props){
        super(props);
        this.state={
            info:"",
        }
    
}
 saludar(){
    console.log("Me clickearon")
}
render(){
    return(
        <View>
            <Pressable onPress={() => this.saludar()}>
                <Text>Clickeame</Text>
            </Pressable>
        </View>
    )
}
}
export default Boton