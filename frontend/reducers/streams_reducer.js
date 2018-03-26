import merge from 'lodash/merge';
import { RECEIVE_STREAMS } from '../actions/streams_actions';


const StreamsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STREAMS:
      return {streams: action.streams};
    default:
      return state;
  }
};

export default StreamsReducer;
