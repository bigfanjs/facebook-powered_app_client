import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Button from 'material-ui/Button';

import './album-item.css';

class AlbumItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleSelectAlbum(id) {
    this.context.router.history.push('/albums/' + id);
  }

  render() {
    const {id, name, cover_photo} = this.props.album;
    const coverImage = cover_photo.images[1];

    return (
      <GridListTile className="album_item">
        <img src={coverImage.source} alt="" className="album_item_img" />
        <GridListTileBar
          title={name}
          actionIcon={
            <Button
              color="contrast"
              onClick={() => { this.handleSelectAlbum(id); }}
              dense>
              View
            </Button>
          }
        />
      </GridListTile>
    );
  }
}

export default AlbumItem;