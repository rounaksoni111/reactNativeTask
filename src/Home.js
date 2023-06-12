import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView, LogBox } from 'react-native';
// Component
import { Block, Header } from './components';
// hooks
import useTheme from './hooks/useTheme';

const Home = ({ navigation }) => {
  const { sizes } = useTheme();
  const [categories, setCategoties] = useState([]);
  const [Products, setProducts] = useState([])



  const fatchProductData = async () => {
    await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products))
  }

  const fatchcategoriesData = async () => {
    await fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(json => setCategoties(json))
  }

  useEffect(() => {
    fatchProductData();
    fatchcategoriesData();
  }, []);


  const filteredCategories = categories.filter((category) =>
    Products.some((item) => item.category === category)
  );


  const renderProducts = (item) => {
    const { description, id, images, title } = item?.item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('sub', { itemId: id })}>
        <Block flex={0} marginHorizontal={sizes.s - 5}>
          <Image
            style={styles.image}
            borderRadius={10}
            source={{ uri: images[0] }} />
          <Text style={styles.itemTitle} >{title}</Text>
          <Text style={styles.itemDesc}>{description}</Text>
        </Block >
      </TouchableOpacity>
    )

  };


  const renderCategory = ({ item }) => {
    const categoryItems = Products.filter((items) => items.category == item);
    return (
      <Block scroll>
        <Block flex={0} row marginVertical={sizes.sm} style={{ justifyContent: 'space-between' }}>
          <Text style={styles.categoryName}>{item}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('category', { categoryItem: categoryItems })}>
            <Text style={{ color: 'gray', marginRight: 10, top: 8 }}>see all </Text>
          </TouchableOpacity>
        </Block>
        <FlatList
          data={categoryItems}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderProducts}
          horizontal
        />
      </Block >
    )
  }

  return (
    <Block safe color={'#383b38'}>
      <Header title={'Shopy'} />
      <Block flex={1} margin={sizes.sm}>
        <FlatList
          data={filteredCategories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => String(index)}
        />
      </Block>
    </Block>
  )
};


const styles = StyleSheet.create({
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize'
  },
  itemTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    width: 170,
    marginTop: 10,
    overflow: `hidden`,
    textTransform: 'capitalize'
  },
  itemDesc: {
    color: 'gray',
    fontSize: 10,
    width: 170,
    lineHeight: 10,
    height: 20,
    overflow: `hidden`,
    marginTop: 2
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  }
});

export default Home




