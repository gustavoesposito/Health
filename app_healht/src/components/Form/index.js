import React {useState} from "react";

import {View, Text, TextInput, Button} from 'react-native';
import ResultImc from "./ResultIMC";
import { useState } from 'react';
  
export default function Form(){

  

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