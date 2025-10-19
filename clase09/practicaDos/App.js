import Imagen from './src/components/Imagen';
import ImagenRemota from './src/components/ImagenRemota';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
        <Text>Probando Imagenes</Text>
        <Imagen />
        <ImagenRemota />
    </View>
  );
}


