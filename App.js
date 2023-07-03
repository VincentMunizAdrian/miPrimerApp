// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/Screens/MainScreen.jsx';

const taskList = [
  {
    id: 1,
    task: "Regar plantas",
    complete: false,
  },
  {
    id: 2,
    task: "Lavar platos",
    complete: false,
  },
  {
    id: 3,
    task: "Limpiar el baño",
    complete: false,
  },
  {
    id: 4,
    task: "ir a comprar carne",
    complete: false,
  },
  {
    id: 5,
    task: "Comprar carbon",
    complete: false,
  },
]

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hola Coder!</Text>
    //   <Text>esta funcionando?</Text>
    //   <StatusBar style="auto" />
    // </View>
      <MainScreen taskList= {taskList} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
