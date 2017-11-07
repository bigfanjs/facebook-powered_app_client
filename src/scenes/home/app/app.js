import React, {Component} from 'react';
import {connect} from 'react-redux';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';

import Navbar from '../navbar';
import AlbumList from '../album-list';
import LoadingIndicator from '../../../components/loading-indicator';
import {login} from '../../../actions/fb-login';

const defaultstyle = {
  width: 348,
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%',
  position: 'absolute',
  margin: 0
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.dispatch(login());
  }

  render() {
    if (!this.props.SDKLoaded || this.props.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="home_container">
        <Navbar />
        {
          !this.props.connectedToFacebook ?
            <FacebookLoginButton
              onClick={this.handleLogin}
              style={defaultstyle} /> :
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