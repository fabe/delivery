import React from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import UploaderDisplay from './UploaderDisplay';
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
        onDropAccepted={this.props.onDrop}
        onFinish={info => this.props.onFinishedUpload(info)}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        s3Url={uploadOptions.s3Url}
        imageComponent={UploaderDisplay}
        accept="image/*"
        style={{
          width: '100%',
          minHeight: 200,
          borderStyle: 'dashed',
          borderWidth: 2,
          borderColor: '#eee',
          borderRadius: 3,
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#fcfcfc',
          backgroundImage: "url('/static/ico-upload.svg')",
          backgroundSize: 48,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
        }}
        activeStyle={{
          borderStyle: 'dashed',
          borderWidth: 2,
          borderColor: '#eee',
          backgroundColor: '#f8f8f8',
        }}
      />
    );
  }
}

export default Uploader;
