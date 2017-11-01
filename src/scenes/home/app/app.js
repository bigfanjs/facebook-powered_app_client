import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumList from '../album-list';
import {connectToFacebook} from '../../../actions/fb-login-status';

class Home extends Component {
  handleLogin() {
    const {fetchAlbums, dispatch} = this.props;

    dispatch(connectToFacebook())
      .then(() => { fetchAlbums(); })
      .catch((err) => { console.error(err); });
  }

  render() {
    const {connectedToFacebook} = this.props;

    return (
      <div className="home_container">
        {
          !connectedToFacebook ?
            <button onClick={this.handleLogin}>Login</button> :
            <AlbumList albums={this.props.albums} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums,
  connectedToFacebook: state.fbLoginStatus === 'connected'
});
export default connect(mapStateToProps)(Home);