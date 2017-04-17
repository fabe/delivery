import React from 'react';
import { s3Name, s3Region } from '../config';

class UploaderDisplay extends React.Component {
  render() {
    console.log(this.props);
    const { uploadedFile } = this.props;
    const { filename } = uploadedFile;
    const secureUrl = `https://s3-${s3Region}.amazonaws.com/${s3Name}/${filename}`;

    return <img src={secureUrl} />;
  }
}

export default UploaderDisplay;
