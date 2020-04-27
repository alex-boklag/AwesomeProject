import {SAVE_IMAGES, SAVE_IMAGE} from '../types';

const imagesReducer = (state = {images: []}, action) => {
  const {type, payload} = action;

  switch (type) {
    case SAVE_IMAGES:
      return {
        ...state,
        images: [...payload],
      };
    case SAVE_IMAGE:
      return {
        ...state,
        images: [...state.images, payload],
      };
    default:
      return state;
  }
};

export default imagesReducer;
