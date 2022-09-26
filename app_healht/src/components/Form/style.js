import { StyleSheet  } from 'react-native';
 

const styles = StyleSheet.create({
    formContent: {
        flex:1,
     paddingTop:30,
       backgroundColor:"#fff",
        alignItems:"center",
         borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width:"100%",
     },
    formLabel:{
        color:"#000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
     ButtonCalculator:{
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      widht:"90%",
      paddingBottom:14,
      paddingTop:14,
      backgroundColor:"#32cd32",
      marginLeft:12,
       margin:10,

     },
    textButtonCalculator:{
        fontSize:20,
        color:"#fff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,

    },
    resultImcItem:{
        fontSize:26,
        color:"green",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
      fontSize:16
       
    }
    });
export default styles
 

 