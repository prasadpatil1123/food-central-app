import {  View, StyleSheet, Text,FlatList} from 'react-native';
import Header from '../components/Header'
import Card from '../components/RestaurantCard'

const restaurants = [
  {
    name: 'Cafe Creamy Nuts',
    categories: 'Desserts, Sandwiches and Burger',
    deliveryTime: '35 min',
    distance: '3.7 km',
    // image: require('../../assets/the-muffin-man-bakery.jpg'),
    image: {uri:'https://b.zmtcdn.com/data/pictures/9/18806759/84255adfea9c45077b17f5a75ce3da2b.jpg'},
    id: 1,
  },
  {
    name: 'Cafe Peter',
    categories: 'Beverages, Desserts, Cakes and Bakery',
    deliveryTime: '45 min',
    distance: '4.3 km',
    // image: require('../../assets/central-perk.jpg'),
    image: {uri:'https://3.bp.blogspot.com/-2RAiHQBJFLc/W-ldmQpCCmI/AAAAAAAAbuU/v7N98-zkRh413QxVtHQho_tud6zwe84bACK4BGAYYCw/s1600/cafe-peter-shivaji-nagar-pune.jpg'},
    id: 2,
  },
  {
    name: 'The Soundtrack Cafe',
    categories: 'Cakes, American Sandwiches, Burgers',
    deliveryTime: '25 min',
    distance: '3 km',
    // image: require('../../assets/wildbread-bakery.jpg'),
    image: {uri:'https://im.whatshot.in/img/2020/May/72346491-435031183809444-8055416673538146304-o-1590566717.jpg'},
    id: 3,
  },
  {
    name: "TEA Villa Cafe",
    categories: 'Fast Food, Burgers, Desserts',
    deliveryTime: '20 min',
    distance: '2.5 km',
    // image: require('../../assets/mcdo.jpg'),
    image: {uri:'https://im.whatshot.in/img/2021/Feb/tea-villa-wakad-2-cropped-1613735712.jpg'},
    id: 4,
  },
  {
    name: 'Irani Cafe',
    categories: 'Fast Food, Burgers, Desserts',
    deliveryTime: '25 min',
    distance: '3.1 km',
    // image: require('../../assets/jollibee.jpg'),
    image: {uri:'https://pbs.twimg.com/media/F1_F9zDaAAAp5e4.jpg:large'},
    id: 5,
  },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Header label="Cafe's in PCMC"/>
     <FlatList
     data={restaurants}
     renderItem={({item}) => {
       return <Card info={item}/>;
     }}
     keyExtractor={(restaurant)=>restaurant.id.toString()}
     showsVerticalScrollIndicator={false}
     />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#ffff99',
  },

});