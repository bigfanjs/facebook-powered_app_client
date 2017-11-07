import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar';
import PhotoList from '../photo-list';
import LoadingIndicator from '../../../components/loading-indicator';

import './app.css';

class Album extends Component {
  render() {
    const {loading, SDKLoaded, id} = this.props;

    if (!SDKLoaded || loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="album">
        <Navbar />
        <PhotoList albumID={id} />
      </div>
    );
  }
}

const mapStateToProps = ({SDKLoaded, fbLogin}, {match}) => ({
  id: match.params.id,
  loading: fbLogin.loading,
  SDKLoaded: SDKLoaded
});
export default connect(mapStateToProps)(Album);