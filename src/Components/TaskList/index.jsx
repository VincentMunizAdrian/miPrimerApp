// import { 
//     StyleSheet, 
//     View,
//     FlatList
// } from 'react-native'
// import React from 'react'
// import RenderItemTask from "./renderItemTask"

// const TaskList = ({
//     list,
//     onPressTask
// }) => {
//     return (
//         <View style = {styles.view2}>
//             <FlatList
//             data={list}
//             keyExtractor={(task) => task.id}
//             renderItem={({item}) => RenderItemTask({item, onPressTask})}
//             />
//         </View>
//     )
// }

// export default TaskList

// const styles = StyleSheet.create({
//     view2: {
//         width:'100%',
//         height:'75%',
//         backgroundColor: "#adb5bd",
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingVertical: 20,
//         },
// });