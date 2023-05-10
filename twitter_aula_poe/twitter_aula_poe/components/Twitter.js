import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Twitter(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgtitulo} source={require('../assets/user.png')} />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.texto}</Text>
      <Image
        style={styles.imgtexto}
        source={require('../assets/camelo.webp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titulo: {
    margin: 24,
    marginTop: 0,
    marginLeft: 40,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  texto: {
    fontSize: 14,
    textAlign: 'left',
  
  },
  imgtexto: {
    height: 120,
    width: 260,
    borderRadius: 20,
    
  },
  imgtitulo: {
    height: 32,
    width: 32,
    marginBottom: -25,
    
  },
});
