import React, { useState } from "react";
import { Button, Text, StyleSheet, TextInput, View } from "react-native";
import Resultado from "./Resultado";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function calcularImc(){
        return setImc((weight/(height * height).toFixed(2)));
    }

    function validarImc(){
        if (weight != null && height != null) {
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual a: ");
            setTextButton("Calcular Novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Altura" KeyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Peso" KeyboardType="numeric"/>

                <Button onPress={()=>{validarImc()}} title="Calcular"/>
                <Resultado resultadoText = {messageImc} resultadoIMC={imc}/>
            </View>

            <View></View>
            <View></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        padding: 20,
    }
  });