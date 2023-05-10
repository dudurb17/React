import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// You can import from local files
import Xbox from './Xbox';
import firebase from './firebase';
// or any pure javascript modules available in npm
import { Card, FAB, TextInput } from 'react-native-paper';

//https://random-data-api.com/api/v2/users
export default function XboxList({ navigation }) {
  const [xbox, setXbox] = React.useState([]);
  const [list, setList] = useState('');

  useEffect(() => {
    load();
  });

  const load = () => {
    var bd = firebase.database().ref('Xbox');
    var tempVetor = [];
    bd.on('value', (snapshot) => {
      if (snapshot) {
        snapshot.forEach((child) => {
          tempVetor.push({
            titulo: child.val().titulo,
            texto: child.val().texto,
            link: child.val().link,
          });
        });
      }
    });
    setXbox(tempVetor);
  };

  return (
    <>
      
      <ScrollView>
       <Text style={styles.texto}>
          Essa pagina está destinada para a postagem de grande pensadores
          desconhecidos, como pode ser o seu caso. Essa pagina da a opotunidade
          de mostrar a sua criatividade escondida. Clique em no botão e nos
          mostre a ideia do seu jogo dos sonhos
        </Text>
        <View style={styles.container}>
          <TextInput placeholder="Pesquisar" onChangeText={setList} />
          {xbox
            .filter((val) => {
              if (list == '') {
                return val;
              } else if (val.titulo.toLowerCase().includes(list.toLowerCase()))
                return val;
            })
            .map((item) => {
              return (
                <View style={styles.div}>
                  <Card>
                    <Xbox
                      titulo={item.titulo}
                      texto={item.texto}
                      link={item.link}
                      imgTitulo={item.imgTitulo}
                      imgTexto={item.imgTexto}
                    />
                  </Card>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('XboxForm')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 40,
  },
  div: {
    
    padding: 8,
  },
  texto:{
    
    margin: 16,
    fontSize: 15,
    textAlign: 'justify',
  }
});