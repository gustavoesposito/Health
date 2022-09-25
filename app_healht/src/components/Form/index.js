import React, {useState} from "react";

import {View, Text, TextInput, Button} from 'react-native';
import ResultImc from "./ResultIMC";
   
export default function Form(){

  const [height, setHeight] = useState( null )
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha peso e altura")
  const [imc, setImc] = useState(null)
  const [TextButton, setTextButton] = useState("Calcular")

  function imcCalculator(){
    return setImc(
      (
        (weight.replace(",", ".") * 1) /
        (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
      ).toFixed(2)
    );
  }

  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setWeight(null)
      setHeight(null)
      setMessageImc( "Seu imc é igual:" )
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha  peso e altura")
  }

    return(
<View>
     <View>
        <Text>Altura</Text>
        <TextInput 
       onChangeText={(newHeight) => setHeight(newHeight)}
        value={height}
        placeholder="Digite Sua Altura"
        keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput 
        onChangeText={(newWeight) => setWeight(newWeight)}
         value={weight}
        placeholder="Digite Seu Peso"
        keyboardType="numeric"
         />
         <Button
         onPress={() => validationImc()} 
          title={TextButton}/>
    </View>
  <ResultImc messageResultImc={messageImc} resultImc={imc}/>
</View>
    );
}