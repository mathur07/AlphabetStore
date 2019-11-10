import {createStore} from 'redux'
import changeState from './shopReducer';

const  store=createStore(changeState);

export default store;