import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {GridList} from 'material-ui/GridList';

import PhotoItem from '../photo-item';
import {fetchAlbum} from '../../../actions/albums';
import LoadingIndicator from '../../../components/loading-indicator';

import './photo-list.css';

class PhotoList extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if (!this.props.connectedToFacebook) {
      return this.context.router.history.push('/');
    }

    const {dispatch, albumID} = this.props;
    dispatch(fetchAlbum(albumID));
  }

  render() {
    const {loading, error, photos} = this.props;

    if (loading) {
      return <LoadingIndicator />;
    } else if (error) {
      return <span>{ error }</span>;
    }

    return (
      <GridList cols={2} className="grid_list">
        {
          photos.map(({images, id}) => (
            <PhotoItem
              key={id}
              cellHeight={120}
              cols={1}
              img={images[images.length - 4].source}
              title="photo"
            />
          ))
        }
      </GridList>
    );
  }
}

const mapStateToProps = ({ checkedAlbum, fbLogin }) => ({
  photos: checkedAlbum.photos || [],
  loading: checkedAlbum.loading,
  error: checkedAlbum.error,
  album: checkedAlbum.album,
  connectedToFacebook: fbLogin.status === 'connected'
});
export default connect(mapStateToProps)(PhotoList);