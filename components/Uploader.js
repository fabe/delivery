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
        style={{
          width: '100%',
          minHeight: 200,
          border: '2px dashed #eee',
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#fcfcfc',
          backgroundImage: "url('/static/ico-upload.svg')",
          backgroundSize: 48,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
        }}
      />
    );
  }
}

export default Uploader;
