import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumItem from '../album-item';
import {fetchAlbums} from '../../../actions/albums';

import './album-list.css';

class AlbumList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAlbums());
  }

  render() {
    const albums = this.props.albums;

    if (!albums) {
      return <span>loading Albums...</span>;
    }

    return (
      <ul className="album_list">
        {
          albums
            .filter((album) => album.photos)
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