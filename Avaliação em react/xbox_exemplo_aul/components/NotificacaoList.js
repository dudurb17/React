import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Card, FAB, Title, Paragraph } from 'react-native-paper';

//https://random-data-api.com/api/v2/users
export default function NotificacaoList({ navigation }) {
  const [data, setData] = React.useState([]);
  const [carregando, setCarregando] = React.useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const resp = await fetch('https://api.sampleapis.com/xbox/games');
    const data = await resp.json();
    setData(data);
    setCarregando(false);
  };
  const renderItem = ({ item }) => {
    return (
                <View style={styles.div}>
        <Card>
          <Card.Content>
            <Title style={styles.titulo} ><Text>Nome:{item.name}</Text></Title>
            <Paragraph style={styles.texto}><Text>Genêro:{item.genre}</Text></Paragraph>
            <Paragraph style={styles.texto}>><Text>Data de lançamento:{item.releaseDates.NorthAmerica}</Text></Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {carregando && <Text>Carregando...</Text>}
          {data && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  texto: {
    fontSize: 15,
    textAlign: 'justify',
  },
    div: {
    
    padding: 8,
  },
});

