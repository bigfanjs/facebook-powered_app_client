import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
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
    const {id, name, description, cover_photo} = this.props.album;
    const coverImage = cover_photo.images[0];

    return (
      <li className="album_item">
        <Card className="album_item_card">
          <CardMedia className="album_item_media" image={coverImage.source} />
          <CardContent>
            <Typography type="headline" component="h2">{name}</Typography>
            <Typography
              component="p"
              color={description ? 'default' : 'secondary' }>
              {description ? description : 'there is no attached description for this album' }
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              onClick={() => { this.handleSelectAlbum(id); }}
              dense>
              View
            </Button>
          </CardActions>
        </Card>
      </li>
    );
  }
}

export default AlbumItem;