import { 
    StyleSheet, 
    Text, 
    View,
    Modal,
    Pressable
} from 'react-native'
import React from 'react'

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonHecho]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Ya lo termine!</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNoLoHice]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>Todavia no lo hice</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonCancelar]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalTask

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#495057',
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
        flexDirection: 'column',
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
        backgroundColor: 'green',
    },
    buttonNoLoHice: {
        backgroundColor: 'red',
    },
    buttonCancelar: {
        backgroundColor: '#f8f9fa',
    },
    textStyle: {
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})