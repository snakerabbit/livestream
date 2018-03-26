import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import StreamsReducer from '../reducers/streams_reducer';
import createLoggerMiddleware from 'redux-logger';

const middlewares = [thunk, createLoggerMiddleware];

const configureStore = (preloadedState = {}) => (
  createStore(
    StreamsReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
