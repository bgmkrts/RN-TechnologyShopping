import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import ProductCard from "../../Components/ProductCard";
import HeaderButton from "../../Components/HeaderButton/HeaderButton"
import products_data from "../../datas/products_data.json";
import categories_data from "../../datas/categories.json";
import 'react-native-gesture-handler';

// gelen_datalar = {
//     navigation,
//     route,
// }
// gelen_datalar.navigation

// const { navigation, route } = gelen_datalar;
// navigation


function App(gelen_datalar) {
    const { navigation } = gelen_datalar;
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    // useEffect(() => {
    //     alert("Loading değişti be abla")
    // }, [loading])

    useEffect(() => {
        ///1. bu ekran ilk gösterildiğinde çalışan bölge
        return () => {
            ///2. bu sayfadan çıkıldığında çalışılacak fonksiyon
        }
    }, [/* buraya state datalrıın ismini yazarsan, o state çalıştığında 1 nolu kod tekrar çalışır. */])

    const [selectedCategoryId, setSelectedCategoryId] = useState(0)
    const image = { uri: "data:image/png;base64,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" };

    const renderProductCard = ({ item, index }) => <ProductCard shop={item} bgm={navigation} />


    if (loading) {
        return (<View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="blue" />
        </View>)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.headerStyle}>Teknoloji Mağazası</Text>
                <Image source={image} style={styles.image} />
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'gray',
                marginBottom: 10
            }} />
            <FlatList
                data={selectedCategoryId == 0 ?
                    products_data
                    :
                    products_data.filter(product => product.c_id == selectedCategoryId)
                }

                ListHeaderComponent={() => (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <HeaderButton
                            title={"Hepsi"}
                            bgColor={selectedCategoryId == 0 ? "#AF55CE" : '#FFF'}
                            textColor={selectedCategoryId == 0 ? "#FFFFFF" : '#474747'}
                            onPress={() => setSelectedCategoryId(0)}
                        />
                        {categories_data.map((item, index) => <HeaderButton
                            key={index}
                            title={item.title}
                            bgColor={selectedCategoryId == item.id ? "#AF55CE" : '#FFF'}
                            textColor={selectedCategoryId == item.id ? "#FFFFFF" : '#474747'}
                            onPress={() => setSelectedCategoryId(item.id)}
                        />)}
                    </ScrollView>
                )}
                keyExtractor={(item => item.b_id.toString())}
                renderItem={renderProductCard}
            />

        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,


    },
    headerStyle: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#343434",
        textShadowColor: 'gray',
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 30,

    },
    image: {

        width: 36,
        height: 36,

    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
})

export default App;