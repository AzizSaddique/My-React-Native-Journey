import React, { JSX } from "react";
import{
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AppPro(): JSX.Element{
    const isDarkMode= useColorScheme()==='light'
  return(
    
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={isDarkMode? styles.darkText : styles.whiteText}>Hello world</Text>
      
    </View>
  </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#ffffff'
    },
    darkText:{
        color:'#000000'
    }
})

export default AppPro;
