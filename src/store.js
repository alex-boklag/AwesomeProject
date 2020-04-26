import {createStore, combineReducers} from 'redux';
import imagesReducer from './reducer';

const rootReducer = combineReducers({imagesReducer});
const configureStore = () => createStore(rootReducer);

export default configureStore;
