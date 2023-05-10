import  React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// You can import from local files
import Twitter from './Twitter';
import firebase from './firebase';
// or any pure javascript modules available in npm
import { Card, FAB } from 'react-native-paper';

export default function TwitterList({ navigation }) {
  const [twitter, setTwitter] = React.useState([]);
  useEffect(() => {
    load();
  });
  const load=()=>{
    var bd=firebase.database().ref("twitter");
    var tempVetor=[];
    bd.on('value', (snapshot)=>{
      if(snapshot){
      snapshot.forEach((child)=>{tempVetor.push({titulo:child.val().titulo, texto:child.val().texto});});
      }
    });
    setTwitter(tempVetor)
  };
     
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      {twitter.map((item) => {
        return (
          <View style={styles.div}>
            <Card>
              <Twitter titulo={item.titulo} texto={item.texto} />
            </Card>
          </View>
        );
      })}
      
    </View>
    
    </ScrollView>
    <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('TwitterForm')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  div: {
    padding: 8,
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 40,
  },
});
