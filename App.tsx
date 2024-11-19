import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      const json = await response.json()
      setData(json.movies);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const accion = () => {
    Alert.alert('Este es el titulo', 'HOLA MUNDO')
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.texto}>Hola mundo!</Text>
      <Button title='Ejecuta el hola mundo' onPress={accion} /> */}
      {
        isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.texto}>{item.title} , {item.releaseYear}</Text>
            )}
          />
        )
      }


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'blue',
    // backgroundColor:'red',
    fontSize: 30,

  }
});
