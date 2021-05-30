import React from "react";
import { Image, View,Text } from "react-native";
import styles from "./ProductCard.styles";

const NewsCard=({shop})=>{
  
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:shop.imgURL}}>
                

            </Image>
            <View style={styles.inner_container}>
            <Text style={styles.title}>
                {shop.title}

            </Text>
            <Text style={styles.price}>
                {shop.price}
            </Text>
            <Text style={styles.author}>
                {shop.author}
            </Text>
            </View>
        </View>

    )
}
export default NewsCard;
