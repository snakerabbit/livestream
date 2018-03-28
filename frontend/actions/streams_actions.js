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

export const fetchStream = user => dispatch => (
  StreamsUtil.fetchStream(user)
                .then(stream => dispatch(receiveStreams(stream)))
);

export const deleteStreams = () => dispatch => (
  StreamsUtil.deleteStreams()
                .then(streams => dispatch(receiveStreams(streams)))
);
