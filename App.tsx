import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const accion = ()=>{
    Alert.alert('Este es el titulo', 'HOLA MUNDO')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola mundo!</Text>
      <Button title='Ejecuta el hola mundo' onPress={accion} />
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
  texto:{
    color:'blue',
    backgroundColor:'red',
    fontSize: 30,
    
  }
});
