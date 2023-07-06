import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'

const RenderItemTask  = ({item, onPressTask}) => {

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={styles.botonActividad}>
                <View style={
                    item.completed ?
                    styles.taskCompleted :
                    styles.marca}>
                    <Text>
                    </Text>
                </View>
                <View style={styles.task}
                key={item.id}>
                    <Text style={styles.textTask}>{item.task}</Text> 
                </View>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    botonActividad:{
        width: 250,
        height: 25,
        backgroundColor: '#e9ecef',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        padding: 30,
        borderRadius: 10,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
    },
    task: {
        width: 200,
        alignItems: 'center',
    },
    textTask: {
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    taskCompleted: {
        width: 25,
        height: 25,
        alignItems: 'center',
        backgroundColor: "green",
        borderRadius: 15,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
    },
    marca: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: 25,
        height: 25,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderColor: "#000",
    },
})