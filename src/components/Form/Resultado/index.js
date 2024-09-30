import { View, Text } from "react-native";

export default function Resultado(props){
    return(
        <View>
            <Text>{props.resultadoText}</Text>
            <Text>{props.resultadoIMC}</Text>
        </View>
    );
}