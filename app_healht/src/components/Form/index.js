import React, {useState} from "react";
import {
  Vibration,
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
  Keyboard
 } from 'react-native';
import ResultImc from "./ResultIMC";
import styles from "./style";
   
export default function Form(){

  const [height, setHeight] = useState( null )
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha peso e altura")
  const [imc, setImc] = useState(null)
  const [TextButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])


  function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let totalmc =((weight / (heightFormat * heightFormat)).toFixed(2));
    setImcList((arr) => [...arr,{id: new Date().getTime(), imc:totalmc}])
    setImc(totalmc)
  }

  function verificationImc(){
    if(imc == null ){
      Vibration.vibrate()
      setErrorMessage("*CAMPO REQUIRIDO*")

}  }

  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setWeight(null)
      setHeight(null)
      setMessageImc( "Seu imc é igual:" )
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    }
    else{
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha  peso e altura")
    }
     
   }

    return(
 
     <View style={styles.formContent}>
      { imc == null ?    
      <Pressable onPress={Keyboard.dismiss} style={styles.form}> 
        <Text style={styles.formLabel}>Altura</Text> 
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
        style={styles.input}
       onChangeText={(newHeight) => setHeight(newHeight)}
        value={height}
        placeholder="Digite Sua Altura"
        keyboardType="numeric"
          
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
         style={styles.input}
        onChangeText={(newWeight) => setWeight(newWeight)}
         value={weight}
        placeholder="Digite Seu Peso"
        keyboardType="numeric"
          
         />
          <TouchableOpacity
          style={styles.ButtonCalculator}
          onPress={() => {
            validationImc()
          }}
          >
            <Text
            style={styles.textButtonCalculator}
            >{TextButton}</Text>
          </TouchableOpacity>
          </Pressable>
          : 
          <View style={styles.exibitionResultImc}> 
     
  <ResultImc messageResultImc={messageImc} resultImc={imc}/>
  <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() => {
            validationImc()
          }}
        
          >
            <Text
            style={styles.textButtonCalculator}
            >{TextButton}</Text>
          </TouchableOpacity>
  </View>
  } 
  <FlatList
  style={styles.listImcs}
  data={imcList.reverse()}
  renderItem={({item}) => {
    return(
      <Text style={styles.resultImcItem}> 
      <Text style={styles.textResultItemList}>
         Resultado IMC =
          
      </Text>
      {item.imc}
      </Text>
    )
  }}
  keyExtractor={(item) => {
    item.id
  }}
  />
  </View> 
  );
}