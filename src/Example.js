import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function App() {

    // return (<SafeAreaView style={{ backgroundColor: "#CCC", flex: 1 }}>
    //     <View style={{ flex: 1, backgroundColor: getRandomColor(), flexDirection: 'row', flexWrap: 'wrap' }}>
    //         <View style={{ height: '40%', width: "100%", backgroundColor: "black" }}>
    //             <View style={{ flexDirection: 'row' }}>
    //                 <View style={{ height: 75, width: "50%", backgroundColor: getRandomColor() }}></View>
    //                 <View style={{ height: 75, width: "50%", backgroundColor: getRandomColor() }}></View>
    //             </View>
    //             <View style={{ height: 75, width: "100%", backgroundColor: getRandomColor() }}></View>
    //         </View>
    //     </View>
    // </SafeAreaView>)
    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <View style={{ flex: 1, backgroundColor: getRandomColor(), borderWidth: 5, borderColor: "red" }}>
                <View style={{ flex: 1, backgroundColor: getRandomColor(), flexDirection: "row" }}>
                    <View style={{ flex: 1, backgroundColor: getRandomColor(), flexDirection: "row" }}>
                        <View style={{ backgroundColor: getRandomColor(), flex: 1, borderWidth: 10, borderColor: "green" }}>
                            <Text>dfgy</Text>
                        </View>
                        <View style={{ backgroundColor: getRandomColor(), flex: 1 }}>
                            <Text>dfgy</Text>

                        </View>

                    </View>
                    <View style={{ flex: 1, backgroundColor: getRandomColor() }}></View>
                    <View style={{ flex: 1, backgroundColor: getRandomColor() }}></View>
                </View>
                <View style={{ flex: 1, backgroundColor: getRandomColor(), flexDirection: "row" }} >
                    <View style={{ flex: 8, backgroundColor: getRandomColor() }}>
                        <View style={{ flex: 1, backgroundColor: getRandomColor() }}></View>
                        <View style={{ flex: 1, backgroundColor: getRandomColor() }}></View>

                    </View>
                    <View style={{ flex: 4, backgroundColor: getRandomColor() }}></View>

                </View>
            </View>
            <View style={{ flex: 1, height: "50%", backgroundColor: getRandomColor() }}></View>
        </View>

    );

}