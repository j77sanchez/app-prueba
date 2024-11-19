import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const imagen = { uri: 'https://cdn.pixabay.com/photo/2023/03/14/04/44/ai-generated-7851451_640.jpg' }


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
        /* isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.texto}>{item.title} , {item.releaseYear}</Text>
            )}
          />
        ) */
      }
      {/* <ScrollView style={styles.scrollView}>

        <Text style={styles.texto} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.texto} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </ScrollView> */}

      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.blogs.es/36bebd/output/650_1200.jpeg',
        }}
      /> */}
      <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>
        <Text style={styles.texto}>Hola </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
    flex:1,
    justifyContent :'center'
  },
  texto: {
    color: 'blue',
    // backgroundColor:'red',
    fontSize: 40,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  tinyLogo: {
    width: 300,
    height: 500,
  },
});
