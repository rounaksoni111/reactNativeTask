import { Image, StyleSheet, Text, Dimensions, ScrollView, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Block, Header } from './components';
import useTheme from './hooks/useTheme';


const SingleCategoryItemScreen = ({ navigation, route }) => {
  const { sizes } = useTheme();
  const { categoryItem } = route.params || "";
  let title = ((categoryItem || []).map((item) => item.category))


  const renderItem = (item) => {
    const { description, id, images, title } = item?.item;
    return (
      <Block flex={0} marginHorizontal={sizes.s} marginVertical={sizes.s}>
        <TouchableOpacity onPress={() => navigation.navigate('sub', { itemId: id })}>
          <Image
            style={styles.image}
            borderRadius={10}
            source={{ uri: images[0] }} />
          <Text style={styles.itemTitle} >{title}</Text>
          <Text style={styles.itemDesc}>{description}</Text>
        </TouchableOpacity>
      </Block>
    )

  };

  return (
    <Block color={'#383b38'} >
      <Header
        title={title[0] || ""}
        leftElement={<Header.BackButton onPress={() => { navigation.goBack() }} />}
      />
      <FlatList
        data={categoryItem}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </Block>
  )
}

const styles = StyleSheet.create({
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
    width: 180,
  }
})


export default SingleCategoryItemScreen