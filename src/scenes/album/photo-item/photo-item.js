import React, {Component} from 'react';
import { GridListTile } from 'material-ui/GridList';

class PhotoItem extends Component {
  render() {
    const {img, cols, title} = this.props;

    return (
      <GridListTile cols={cols}>
        <img src={img} alt={title} />
      </GridListTile>
    );
  }
}

export default PhotoItem;