import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./ProductCard.styles";

const ProductCard = ({ shop, bgm }) => {
    // alert("ssdfsdf")
    // Alert.alert("Başıl","açıklama")
    
    // const navigation = useNavigation();

    return (
        <TouchableOpacity
            // onPress={alert("df")}
            onPress={() => bgm.navigate("Detail",{
                shopDatasi:shop, 

            })}
            // onPress={() => navigation.navigate("Detail")}

        >
            <View style={styles.container}  >
                <Image style={styles.image} source={{ uri: shop.imgURL }}/>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>
                        {shop.title}

                    </Text>
                    <Text style={styles.price}>
                        {shop.price}
                    </Text>
                    {/* <Text numberOfLines={3} >
                        {shop.description}
                    </Text> */}

                </View>
                
            </View>
        </TouchableOpacity>

    )
}
export default ProductCard;



