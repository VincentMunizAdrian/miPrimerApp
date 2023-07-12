// import { 
//     StyleSheet, 
//     Text, 
//     TextInput, 
//     View,
//     TouchableOpacity 
// } from 'react-native'


// const TopBar = ({
//     input,
//     onAddTask,
//     setInput
// }) => {
//     return (
//         <View style={styles.contenedorHeaderPrincipal}>
//                         <View>
//                 <Text style={styles.titulo}>
//                     Arma tu día!
//                 </Text>
//             </View>
//             <View style={styles.contenedorAgregarTarea}>
//                 <TextInput 
//                     placeholder='Agregar una actividad'
//                     style={styles.input}
//                     value={input}
//                     onChangeText={setInput}
//                 />
//                 <TouchableOpacity 
//                     style = {styles.button}
//                     onPress={onAddTask}
//                 >
//                     <Text style={styles.buttonText}>Agregar</Text>  
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default TopBar

// const styles = StyleSheet.create({
//     contenedorHeaderPrincipal: {
//         height:'25%',
//         width: '100%',
//         flexDirection: 'column',
//         gap: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#343a40',
//         borderRadius: 1,
//     },
//     titulo: {
//         fontSize: 28,
//         marginTop: 15,
//     },
//     contenedorAgregarTarea: {
//         flexDirection: 'row',
//         gap: 20,
//     },
//     input: {
//         width: 200,
//         fontSize: 15,
//         fontStyle: 'italic',
//         borderBottomColor: '#e9ecef',
//         borderBottomWidth: 3,
//     },
//     button: {
//         justifyContent: 'center',
//         backgroundColor: '#6c757d',
//         borderRadius: 8,
//         width: 70,
//         height: 40,
//     },
//     buttonText: {
//         fontSize: 18,
//         textAlign: "center",
//     },
// })