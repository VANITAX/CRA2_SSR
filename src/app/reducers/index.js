import { combineReducers } from 'redux';
import app from './app';

export default (history) => combineReducers({
  app,
  router: history
});
