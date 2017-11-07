import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumItem from '../album-item';
import LoadingIndicator from '../../../components/loading-indicator';
import {fetchAlbums} from '../../../actions/albums';

import './album-list.css';

class AlbumList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAlbums());
  }

  render() {
    const albums = this.props.albums;

    if (!albums) {
      return <LoadingIndicator />;
    }

    return (
      <ul className="album_list">
        {
          albums
            .filter((album) => album.cover_photo)
            .map((album) => (
              <AlbumItem key={album.id} album={album} />
            ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.items
});
export default connect(mapStateToProps)(AlbumList);