import { 
  StyleSheet, 
  TextInput, 
  View, 
  Text, 
  FlatList, 
  Modal, 
  Pressable 
} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const MainScreen = ({taskList}) => {
  
  const [list, setList] = useState (taskList)
  const [input, setInput] = useState ("")
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({})
  
  const onAddTask = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false
      }
    ])
    console.log("Se agrego una tarea");
  }
  const onPressTask = (task) => {
    console.log(task);
    setTaskActive(task)
    setModalVisible(!modalVisible)
  }
  
  console.log(list);

  const renderItemTask  = ({item, onPressTask}) => {
    return (
      <Pressable onPress={() => onPressTask(item)}>
        <View style={styles.task} key={item.id}>
          <Text>
            {item.task}
          </Text> 
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput 
          placeholder='Agregar actividad'
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity 
          style = {styles.button}
          onPress={onAddTask}
          >
          <Text style={styles.bottonText}> Agregar tarea </Text>  
        </TouchableOpacity> 
      </View>
      <View style = {styles.view2}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderItemTask({item, onPressTask})}
        />
        {/* {list.map(item =>
          <View style ={styles.task} key={item.id}>
            <Text>
              {item.task}
            </Text> 
          </View>
        )} */}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{taskActive.task}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonHecho]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hecho</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonNoLoHice]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No lo hice aun</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonBorrar]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Borrar tarea</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    width:'100%',
    height:'15',
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#134074',
  },
  view2: {
    width:'100%',
    height:'85%',
    backgroundColor: "#8DA9C4",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  task: {
    width: 200,
    borderRadius: 10,
    backgroundColor: '#0B2545',
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 30
  },
  input: {
    width: 150,
    borderBottomColor: '#EEF4ED',
    borderBottomWidth: 3,
    marginBottom: 8
  },
  button: {
    backgroundColor: 'red',
    width: 150,
    paddingHorizontal: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonHecho: {
    backgroundColor: 'red',
  },
  buttonNoLoHice: {
    backgroundColor: 'green',
  },
  buttonBorrar: {
    backgroundColor: 'blue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
})