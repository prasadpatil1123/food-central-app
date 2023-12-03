import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import IconLabel from './IconLabel';

const iconColor = '#000';
const RestaurantCard = ({ info }) => {
  const { name, categories, deliveryTime, distance, image } = info;
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={image}
        />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.catStyle}>
            {categories}
          </Text>

          <View style={styles.iconLabelStyle}>
            <IconLabel 
            name="ios-time" 
            label={deliveryTime} 
            color={iconColor} />
            <IconLabel 
            name="ios-pin" 
            label={distance} 
            color={iconColor} />
        </View>
        </View>
      </View>
    </View>
  );
};
const decviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 15;
const styles = StyleSheet.create({
  container:{
    width:decviceWidth-20,
    alignItems:'center',
    marginTop:20,
  },
  cardContainer: {
    width: decviceWidth - offset,
    backgroundColor: '#ffcc66',
    height: 200,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: decviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: '800',
  },
  catStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle:{
    flexDirection:'row',
    marginTop:10,
  }
});
export default RestaurantCard;
