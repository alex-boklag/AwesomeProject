import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const PhotoCard = ({item}) => {
  return (
    <View
      style={{
        marginBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
      <Image source={{uri: item.uri}} style={{width: 400, height: 400}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        <Text style={{fontSize: 20, color: '#696969'}}>{item.date}</Text>
      </View>
    </View>
  );
};
