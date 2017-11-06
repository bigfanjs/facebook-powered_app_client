import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GridList} from 'material-ui/GridList';

import PhotoItem from '../photo-item';
import {fetchAlbum} from '../../../actions/albums';

import './photo-list.css';

class PhotoList extends Component {
  componentWillMount() {
    const {dispatch, albumID} = this.props;
    dispatch(fetchAlbum(albumID));
  }

  render() {
    const {loading, error, photos} = this.props;

    if (loading) {
      return <span>Loading Album...</span>;
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

const mapStateToProps = ({ checkedAlbum }) => ({
  photos: checkedAlbum.album || [],
  loading: checkedAlbum.loading,
  error: checkedAlbum.error,
  album: checkedAlbum.album
});
export default connect(mapStateToProps)(PhotoList);