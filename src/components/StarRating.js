import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function StarRating({ rating }) {
    const renderStars = () => {
        const starIcons = [];

        for (let i = 1; i <= 5; i++) {
            starIcons.push(
                <AntDesign
                    key={i}
                    name={i <= rating ? 'star' : 'staro'}
                    size={24}
                    color={i <= rating ? 'gold' : 'gray'}
                    style={styles.star}
                />
            );
        }

        return starIcons;
    };
    return (
        <View style={styles.container}>
            {renderStars()}
            {/* <Text style={styles.ratingText}>{rating}/5</Text> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection:'row'
    },
    star: {
      marginRight: 5,
    },
    ratingText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });