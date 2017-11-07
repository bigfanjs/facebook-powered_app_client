import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const style = {
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute'
};

export default function () {
  return (
    <CircularProgress size={40} style={style} />
  );
}