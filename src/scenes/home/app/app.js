import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';

import AlbumList from '../album-list';
import {login} from '../../../actions/fb-login';

class Home extends Component {
  componentWillMount() {
    if (this.props.connectedToFacebook) {
      this.props.fetchUserAlbums();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {connectedToFacebook} = this.props;

    if (nextProps.connectedToFacebook !== connectedToFacebook) {
      if (connectedToFacebook) this.props.fetchUserAlbums();
    }
  }

  handleLogin() {
    this.props.dispatch(login());
  }

  render() {
    if (!this.props.SDKLoaded) {
      return <span>Loading Sdk...</span>;
    }

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
            <AlbumList />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  connectedToFacebook: state.fbLogin.status === 'connected',
  loading: state.fbLogin.loading,
  SDKLoaded: state.SDKLoaded
});
export default connect(mapStateToProps)(Home);