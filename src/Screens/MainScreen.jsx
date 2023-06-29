import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.view1}>
        <TextInput/>
        <Button title='Agregar un comentario'/>
      </View>
      <View style = {styles.view2}>

      </View>
      <View style = {styles.view3}>

      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    flex:1,
    backgroundColor: "blue",
    width:'100%'
  },
  view2: {
    flex: 1,
    backgroundColor: "red",
    width:'100%'
  },
  view3: {
    flex: 1,
    backgroundColor: "blue",
    width:'100%'
  }
})