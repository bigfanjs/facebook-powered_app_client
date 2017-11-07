import React, {Component} from 'react';
import {connect} from 'react-redux';
import { GridList } from 'material-ui/GridList';

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
      <div className="album_list">
        <GridList cellHeight={180} className="albums_grid_list">
          {
            albums
              .filter((album) => album.cover_photo)
              .map((album) => (
                <AlbumItem key={album.id} album={album} />
              ))
          }
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.items
});
export default connect(mapStateToProps)(AlbumList);