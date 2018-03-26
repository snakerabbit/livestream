import * as StreamsUtil from '../util/streams_util';
export const RECEIVE_STREAMS = "RECEIVE_STREAMS";


const receiveStreams = streams => {
  return {
    type: RECEIVE_STREAMS,
    streams
  };
};

export const fetchStreams = () => dispatch => (
  StreamsUtil.fetchStreams()
                 .then(streams => dispatch(receiveStreams(streams)))
);
