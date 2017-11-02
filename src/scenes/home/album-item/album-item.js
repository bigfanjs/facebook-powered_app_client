import React, {Component} from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import './album-item.css';

class AlbumItem extends Component {
  render() {
    const {name, description, photos} = this.props.album;
    const coverImage = photos.data[0].images[0];

    return (
      <li className="album_item">
        <Card className="album_item_card">
          <CardMedia
            className="album_item_media"
            image={coverImage.source}
          />
          <CardContent>
            <Typography
              type="headline"
              component="h2">
              {name}
            </Typography>
            <Typography
              component="p"
              color={description ? 'default' : 'secondary' }>
              {description ? description : 'there is no attached description for this album' }
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">View</Button>
          </CardActions>
        </Card>
      </li>
    );
  }
}

export default AlbumItem;