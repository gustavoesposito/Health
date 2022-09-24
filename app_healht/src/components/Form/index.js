import React {useState} from "react";

import {View, Text, TextInput, Button} from 'react-native';
import ResultImc from "./ResultIMC";
import { useState } from 'react';
  
export default function Form(){

  const [height, setHeight] = useState( null )
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha peso e altura")
  const [Imc, setImc] = useState(null)
  const [TextButton, setTextButton] = useState("Calcular")

  function imccalculator(){
    return setImc((weight/(height*height)) .toFixed(2))
  }

    return(
<View>
     <View>
        <Text>Altura</Text>
        <TextInput 
        placeholder="Digite Sua Altura"
        keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput 
        placeholder="Digite Seu Peso"
        keyboardType="numeric"
         />
         <Button title="Calcular Seu IMC"/>
    </View>
  <ResultImc messageResultImc={messageImc} resultImc={imc}/>
</View>
    );
}