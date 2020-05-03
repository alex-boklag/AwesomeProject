import React from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const PhotoCard = ({item}) => {
  const screenSizes = Dimensions.get('window');

  return (
    <View
      style={{
        marginBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
      <Image source={{uri: item.uri}} style={{ width: screenSizes.width, height: 300}} resizeMode={'stretch'} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Icon name="heart" size={20} color="#696969" />
          <Icon
            style={{marginHorizontal: 5}}
            name="comment"
            size={20}
            color="#696969"
          />
          <Icon name="paper-plane" size={20} color="#696969" />
        </View>
        <Text style={{fontSize: 20, color: '#696969', margin: 5}}>{item.date}</Text>
      </View>
    </View>
  );
};
