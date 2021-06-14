import React, { useEffect, useRef } from "react";
import { ToastAndroid, Dimensions, ScrollView, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, Alert, BackHandler } from "react-native";

function App({ navigation }) {
    const passInputRef = useRef(null);
    useEffect(() => {
        ToastAndroid.showWithGravityAndOffset(
            "Yükleniyor...",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        )

    }, [])
    useEffect(() => {
        const backAction = () => {
            Alert.alert("UYARI!", "Uygulamadan Çıkmak İstediğinize Emin misiniz?", [
                {
                    text: "İptal",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "ÇIKIŞ", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        // return () => backHandler.remove();
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ width: Dimensions.get("screen").width, height: Dimensions.get("screen").height }}
            >
                <View style={styles.ust}>
                    <ImageBackground style={styles.image} source={require("../../assets/logo.jpg")} >
                        <Text style={styles.text}>Alışverişin kolay yolu</Text>

                    </ImageBackground>
                </View>
                <View style={styles.alt}>
                    <TextInput style={styles.TextInput}
                        returnKeyType="next"
                        placeholder="Kullanıcı Adı"
                        onSubmitEditing={() => {
                            passInputRef.current.clear()
                            passInputRef.current.focus()
                        }} />
                    <TextInput ref={passInputRef} style={styles.TextInput}
                        secureTextEntry={true}
                        placeholder="Şifre" />
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {

                                navigation.navigate('Home')
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.font}> Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",


    },

    image: {
        marginTop: 50,
        height: 250,
        width: 250,
        resizeMode: "center",
        alignSelf: "center", //atanan compomrmrti yatayda hizalar
        justifyContent: 'flex-end', // atanan componentin childlarını dikeyde hizalar
        alignItems: 'center',// atanan componentin childlarını yatayda hizalar


    },
    ust: {
        flex: 3,
        // alignItems

    },
    alt: {
        flex: 3,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#AF55CE",
        padding: 10,
        borderRadius: 50,
        width: "30%",
        margin: 50,

    },

    font: {
        color: "#FFFFFF",
    },
    TextInput: {

        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        padding: 12
    },
    text: {
        fontSize: 24,
        fontStyle: "italic",
        color: "#717171"
    }

});
export default App;

