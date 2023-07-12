import { 
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Global/Colors'
// import categories from '../Data/categories.json'
import productsRaw from '../Data/products.json'
// import CategoryItem from '../Components/CategoryItem'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'

const ItemListCategory = ({
  category,
  setCategory
}) => {

  const [selectedCategory, setSelectedCategory] = useState(category)
  const [products, setProducts] = useState([])
  const [keyWord, setKeyWord] = useState("")
  const [searchError, setSearchError] = useState("")

  useEffect(() => {
    const productsFiltred = productsRaw.filter(product => product.category === 
    selectedCategory && product.nombre.toLocaleLowerCase().includes(keyWord.toLowerCase()))
    setProducts(productsFiltred)
  }, [selectedCategory, keyWord])

  const onSearch = (input) => {
    const searching = /^[a-zA-Z0-9\ ]*$/
    const searchingEvaluation = searching.test(input)

    if(searchingEvaluation) {
      setKeyWord(input)
      setSearchError("")
    } else {
      setSearchError("Solo letras y numeros")
    }

  }

  return (
    <View style = {styles.containerHome}>
      <Search
        onSearch={onSearch}
        error= {searchError}
        goBack={()=> setCategory("")}
      />
      <FlatList 
          data={products}
          keyExtractor={product => product.id}
          renderItem={({item}) => ProductItem({item})}
          showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  containerHome: {
    height: '90%',
    backgroundColor: colors.platinum,
    alignItems: 'center',
  }
})