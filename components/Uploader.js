import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../config';

class Uploader extends React.Component {
  constructor() {
    super();
    this.state = { uploadedFileCloudinaryUrl: '' };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const data = new FormData();
    const { onFinishedUpload } = this.props;
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios
      .post(CLOUDINARY_UPLOAD_URL, data)
      .then(({ data }) => {
        const { secure_url: url } = data;
        onFinishedUpload(url);

        this.setState({
          uploadedFileCloudinaryUrl: url,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { uploadedFileCloudinaryUrl } = this.state;
    return (
      <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
        {uploadedFileCloudinaryUrl
          ? <img src={uploadedFileCloudinaryUrl} />
          : <p>Drop an image or click to select a file to upload.</p>}
      </Dropzone>
    );
  }
}

export default Uploader;
