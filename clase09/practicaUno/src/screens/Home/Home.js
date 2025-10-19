import React, { Component } from "react";
import { Text, View } from "react-native";
import Boton from "../../components/Boton/Boton";
import Contador from "../../components/Contador/Contador";
import { StyleSheet } from "react-native";
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            info: "",
        }
    }
    render(){
        return(
            <View style={styles.contenedor}>
                <Text>
                    Hola mundo
                </Text>
                <Boton botonStyle={styles.boton} textoStyle={styles.texto} />
                <Contador />
            </View>
        )
       
    }

}
 const styles=StyleSheet.create({
            contenedor: {
                flex: 1,
                justifyContent: "center",
                textAlign: "center",
                padding: 10
            },
            boton:{
                padding: 10,
                backgroundColor:"ccc",
                marginBottom: 10,
                borderRadius: 4,
            },
            texto:{
                fontWeight: "Bold",
                textAlign:"center"
            }

        })
export default Home;