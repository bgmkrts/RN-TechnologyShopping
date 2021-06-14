import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
function Button({ title = "title", bgColor = "pink", textColor = "red", onPress }) {
    return (


        <TouchableOpacity style={{
            backgroundColor: bgColor,
            borderRadius: 50,
            borderColor: "#949494",
            borderWidth: 3,
            width: 159,
            height: 47,
            justifyContent: 'center',
            marginLeft: 14
        }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 20, color: textColor, textAlign: "center" }}>{title}</Text>

        </TouchableOpacity>

    )


}


export default Button;