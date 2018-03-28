import { fetchStreams, fetchStream, deleteStreams } from '../actions/streams_actions';
import { connect } from 'react-redux';
import Root from './root';

const mapStateToProps = state =>({
  streams: state.streams
});

const mapDispatchToProps = dispatch =>({
  fetchStreams: () => dispatch(fetchStreams()),
  fetchStream: user => dispatch(fetchStream(user)),
  deleteStreams: () => dispatch(deleteStreams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
