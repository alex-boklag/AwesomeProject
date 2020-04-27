import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, ScrollView} from 'react-native';
import {Layout} from '../components/Layout';
import {fetchImages} from '../actions/imagesActions';
import {axios} from '../services/mockApi';

export default function Gallery() {
  const dispatch = useDispatch();
  const images = useSelector(state => state.imagesReducer.images);

  useEffect(() => {
    dispatch(fetchImages({axios, api: '/images'}));
  }, []);

  return (
    <Layout>
      <ScrollView>
        {images.map(item => {
          return (
            <View key={item.id}>
              <Image
                source={{uri: item.uri}}
                style={{width: 400, height: 400}}
              />
              <Text>{item.date}</Text>
            </View>
          );
        })}
      </ScrollView>
    </Layout>
  );
}
