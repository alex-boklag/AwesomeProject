import React from 'react';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {StyleSheet, Button, View, PermissionsAndroid} from 'react-native';
import {addImage} from '../actions';

export default function UploadPhoto() {
  const dispatch = useDispatch();

  const chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const d = new Date(response.timestamp || new Date());
        const date = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;
        const month =
          d.getMonth() > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;

        dispatch(
          addImage({
            uri: response.uri,
            date: `${date}.${month}.${d.getFullYear()}`,
          }),
        );
      }
    });
  };

  return (
    <View style={style.container}>
      <Button title="Choose File" onPress={() => chooseFile()} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
