import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

export default function Gallery() {
  const images = useSelector(state => state.imagesReducer.images);

  return (
    <ScrollView>
      {images.map(item => {
        return (
          <View>
            <Image
              source={{uri: item.uri}}
              style={{width: 400, height: 400}}
              key={item.date}
            />
            <Text>{item.date}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
