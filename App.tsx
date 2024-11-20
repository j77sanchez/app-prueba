import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import incon from './assets/icon.png';
// const incon = require('./assets/icon.png')


export default function App() {


  return (
    <View style={styles.container}>
      {/* <Image
      source={{uri:"https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg"}}
       style = {{ width:215 , height : 294}}
      resizeMode='center'></Image> */}
      <StatusBar style="light" />
      {/* <Button
      color={'red'} 
      title="Pulsa aqui" 
      onPress={ ()=>alert('hola')}
      ></Button> */}

      <TouchableHighlight
        underlayColor={'#09f'}
        onPress={() => alert('Hola')}
        style={{ width: 200, height: 200, backgroundColor: 'red', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ color: 'white' }}>Pulsa aqui</Text>
      </TouchableHighlight>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
