import React from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import { s3Url, server } from '../config';

class Uploader extends React.Component {
  render() {
    const uploadOptions = {
      ACL: 'private',
      server,
      s3Url,
    };

    return (
      <DropzoneS3Uploader
        onFinish={info => this.props.onFinishedUpload(info.fileUrl)}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        s3Url={uploadOptions.s3Url}
      />
    );
  }
}

export default Uploader;
