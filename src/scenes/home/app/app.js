import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';

import Navbar from '../navbar';
import AlbumList from '../album-list';
import LoadingIndicator from '../../../components/loading-indicator';
import {login} from '../../../actions/fb-login';

class Home extends Component {
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