import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import ubigeosDep from '../reducers/ubigeosDep';
import ubigeosProv from '../reducers/ubigeosProv';
import ubigeosDist from '../reducers/ubigeosDist';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  ubigeosDep,
  ubigeosProv,
  ubigeosDist
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
