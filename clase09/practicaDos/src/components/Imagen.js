import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
function Imagen(){
    return <Image style={styles.image}
                  source={require('../../assets/img/zonaMedia.jpeg')}
                  resizeMode="contain"/>    
}

const styles = StyleSheet.create({
    image: {
        height: 400,
    }
})
export default Imagen