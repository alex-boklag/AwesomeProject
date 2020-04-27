import {SAVE_IMAGE, SAVE_IMAGES, FETCH_IMAGES} from '../types';

export const saveImage = image => {
  return {
    type: SAVE_IMAGE,
    payload: image,
  };
};

export const fetchImages = payload => {
  return {
    type: FETCH_IMAGES,
    payload,
  };
};

export const saveImages = images => {
  return {
    type: SAVE_IMAGES,
    payload: images,
  };
};
