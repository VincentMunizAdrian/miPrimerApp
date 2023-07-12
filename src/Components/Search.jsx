import { 
    StyleSheet,  
    View,
    TextInput,
    Text,
    Pressable
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { MaterialIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyWord, setKeyWord] = useState("")

    return (
        <View style={styles.searchContainer}>
            <TextInput style={styles.searchText}
                placeholder='Buscar...'
                value={keyWord}
                onChangeText={setKeyWord}
            />
            <Pressable onPress={() => onSearch(keyWord)}>
                <Ionicons name="search-circle-outline" size={36} color="black" />
            </Pressable>
            <Pressable onPress={() => setKeyWord("")}>
                <MaterialIcons name="cancel" size={36} color="black" />
            </Pressable>
            <Pressable onPress={goBack}>
                <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
            </Pressable>
            
            {error ? <Text>{error}</Text> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    searchText: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.gray,
        borderRadius: 10,
    },
})