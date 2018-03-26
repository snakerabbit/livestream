import * as StreamsUtil from '../util/streams_util';
export const RECEIVE_STREAMS = "RECEIVE_STREAMS";


const receiveStreams = streams => {
  return {
    type: RECEIVE_STREAMS,
    streams
  };
};

export const fetchStreams = userID => dispatch => (
  StreamsUtil.fetchResponses(userID)
                 .then(streams => dispatch(receiveStreams(streams)))
);
