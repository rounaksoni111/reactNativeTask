import { Image, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Block, Header } from './components'
import useTheme from './hooks/useTheme'
import StarRating from './components/StarRating';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SingleItemScreen = ({ navigation, route }) => {
    const { sizes } = useTheme();
    const { itemId } = route.params;
    const [dataInfo, setDataInfo] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / SCREEN_WIDTH);
        setCurrentIndex(index);
    };

    const fatchDatainformation = async () => {
        const res = await fetch(`https://dummyjson.com/products/${itemId}`)
            .then(res => res.json())
            .then(json => setDataInfo(json))
    }

    useEffect(() => {
        fatchDatainformation();
    }, [])


    return (
        <Block color={'#383b38'}>
            <Header
                title={dataInfo?.category || ''}
                leftElement={<Header.BackButton onPress={() => { navigation.goBack() }} />}
            />
            <Block margin={sizes.s} flex={1}>
                <Block flex={0}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >
                        {(dataInfo?.images || []).map((imageUrl, index) => (
                            <Image
                                key={index}
                                borderRadius={5}
                                source={{ uri: imageUrl }}
                                style={[styles.image, currentIndex === index ? styles.activeImage : null]}
                            />
                        ))}
                    </ScrollView>
                </Block>

                <Block>
                    <Text style={styles.itemTitle}>{dataInfo?.title || ''} ({dataInfo?.brand || ''})</Text>
                    <StarRating rating={dataInfo?.rating} />
                    <Block flex={0} row>
                        <Text style={styles.Price} > ${dataInfo?.price || " "}</Text>
                        <Text style={styles.discount} > -{dataInfo?.discountPercentage || " "}% </Text>
                    </Block>
                    <Text style={styles.description}>{dataInfo?.description || ""}</Text>
                </Block>
            </Block>
        </Block>
    )
}


const styles = StyleSheet.create({
    itemTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        overflow: `hidden`,
        marginBottom: 5,
    },
    Price: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    image: {
        width: SCREEN_WIDTH - 25,
        height: SCREEN_WIDTH - 10,
        resizeMode: 'stretch',
        marginRight: 10,
    },
    activeImage: {
        borderWidth: 2,
        borderColor: 'white',
    },
    discount: {
        color: 'red',
        marginTop: 6
    },
    description: {
        color: 'gray',
        fontSize: 14,
        marginTop: 5
    }

})

export default SingleItemScreen