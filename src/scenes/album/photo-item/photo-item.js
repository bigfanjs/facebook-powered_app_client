import React, {Component} from 'react';
import { GridListTile } from 'material-ui/GridList';

import './photo-item.css';

class PhotoItem extends Component {
  render() {
    const {img, cols, title} = this.props;

    return (
      <GridListTile cols={cols}>
        <img src={img} alt={title} className="grid_item_img" />
      </GridListTile>
    );
  }
}

export default PhotoItem;