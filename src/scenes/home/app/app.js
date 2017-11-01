import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';

import AlbumList from '../album-list';
import {fetchAlbums} from '../../../actions/albums';
import {login} from '../../../actions/fb-login';

class Home extends Component {
  componentWillMount() {
    if (this.props.connectedToFacebook) {
      this.props.fetchUserAlbums();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {connectedToFacebook} = this.props;

    if (nextProps.connectToFacebook !== connectedToFacebook) {
      if (connectedToFacebook) this.props.fetchUserAlbums();
    }
  }

  render() {
    if (this.props.loading) {
      return <span>checking user connectivity...</span>;
    }

    return (
      <div className="home_container">
        {
          !this.props.connectedToFacebook ?
            <Button
              onClick={this.props.connectToFacebook}
              color="primary"
              raised>
              Login To Facebook
            </Button> :
            <AlbumList albums={this.props.albums} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums,
  connectedToFacebook: state.fbLogin.status === 'connected',
  loading: state.fbLogin.loading
});
const mapDispatchToProps = (dispatch) => ({
  fetchUserAlbums() {
    dispatch(fetchAlbums());
  },
  connectToFacebook() {
    dispatch(login());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);