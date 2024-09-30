import { Button, Text, TextInput, View } from "react-native";
import Resultado from "./Resultado";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Altura" KeyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput placeholder="Peso" KeyboardType="numeric"/>

                <Button title="Calcular"/>
                <Resultado resultadoIMC = "2"/>
            </View>

            <View></View>
            <View></View>
        </View>
    );
}