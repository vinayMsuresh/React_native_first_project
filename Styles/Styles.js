import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      backgroundColor: 'red',
      marginTop: 30,
      padding: 15,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    bolder: {
      fontWeight:'bold',
      color:'black',
    },
    body: {
      backgroundColor: 'blue',
      color: 'black',
      margin: 20,
      padding: 10
    },
    text:{
      margin:10,
      padding:10
    },
    input:{
      borderWidth: 1,
      borderColor: 'black',
      padding: 8,
      marginTop: 15,
      marginBottom: 15
    },
    form:{
      margin: 35
    },
    list:{
        display: 'flex',
        padding: 20,
        borderWidth: 2,
        backgroundColor: 'gray',
        fontSize: 20,
        margin: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        marginLeft:10,
        width: 100,
        backgroundColor:'red'
    },
    btnText:{
      margin:5,
      backgroundColor:'red',
      color:'white',
      padding: 10
    },
    content:{
      marginTop:25,
      marginBottom: 45,
      flex:1
    },
    todo:{
      flex:1,
      padding: 20,
      borderWidth: 2,
      backgroundColor: 'gray',
      fontSize: 20,
      margin: '2%',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    task:{
      flex:1,
      fontWeight:'bold',
      color: 'white'
    },
    delText:{
      padding:10,
      color:'white',
      backgroundColor:'red'
    }

  });

export default styles;