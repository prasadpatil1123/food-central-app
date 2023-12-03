import {View,Text,StyleSheet,Dimensions} from 'react-native';
 const Header = ({label}) => {
  return(
    <View style={styles.container}>
    <Text style={styles.labelStyle}>{label}</Text>
    </View>
  )
}
const decviceWidth = Math.round(Dimensions.get('window').width);
const styles= StyleSheet.create({
  container:{
    width: decviceWidth,
    height:90,
    backgroundColor:'#ffcc66',
    justifyContent:'flex-end',
    paddingBottom:20,
    alignItems:'center',
  },
  labelStyle:{
    fontSize:24,
    fontWeight:'bold',
     
  },
})
export default Header;