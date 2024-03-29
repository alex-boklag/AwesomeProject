import React from 'react';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {Layout} from '../components/Layout';
import {saveImage} from '../actions/imagesActions';

export default function UploadPhoto() {
  const dispatch = useDispatch();

  const chooseFile = () => {
    const options = {
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
        const d = new Date();

        const date = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;
        const month =
          d.getMonth() > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;

        dispatch(
          saveImage({
            id: d,
            uri: response.uri,
            date: `${date}.${month}.${d.getFullYear()}`,
          }),
        );
      }
    });
  };

  return (
    <Layout>
      <View>
        <Button
          buttonStyle={{
            backgroundColor: '#6495ed',
            borderRadius: 100,
            height: 100,
            width: 100,
          }}
          iconRight
          title="Choose File"
          onPress={() => chooseFile()}
        />
      </View>
    </Layout>
  );
}
