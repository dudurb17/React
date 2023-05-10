import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Xbox(props) {
  var imagem = '' + props.link + '';
  return (
    <View style={styles.container}>
      <Image style={styles.imgUsuario} source={require(`../assets/man.png`)} />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.texto}</Text>
      <Image style={styles.imgTexto} source={{ uri: imagem }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 24,
  },
  titulo: {

    marginLeft: 40,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    
  },
  texto: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 10,
    textAlign: 'justify',
    
  },
  imgUsuario: {
    height: 32,
    width: 32,
    marginBottom:-25
  },
  imgTexto: {
    height: 128,
    width: 270,
  }
});
