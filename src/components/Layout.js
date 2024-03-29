import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export const Layout = props => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      paddingHorizontal: 5,
    },
  });

  return <SafeAreaView style={style.container}>{props.children}</SafeAreaView>;
};
