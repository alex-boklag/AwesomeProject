import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {Layout} from '../components/Layout';
import {PhotoCard} from '../components/PhotoCard';
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
          return <PhotoCard key={item.id} item={item} />;
        })}
      </ScrollView>
    </Layout>
  );
}
