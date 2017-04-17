import React from 'react';
import Uploader from './Uploader';
import TextareaAutosize from 'react-autosize-textarea';
import { s3Name, s3Region } from '../config';

class EditorItem extends React.Component {
  render() {
    const { item, onFormChange, onRemoveItem, setIsUploading, itemsLength, i } = this.props;

    return (
      <div>
        <TextareaAutosize
          name={`item:title:${item.id}`}
          placeholder="Image Title (optional)"
          className="dashedInput item-title"
          value={item.title}
          onChange={e => onFormChange('title', e.target.value, item.id)}
        />

        <TextareaAutosize
          name={`item:subtitle:${item.id}`}
          placeholder="Image Description (optional)"
          className="dashedInput subtitle"
          value={item.subtitle}
          onChange={e => onFormChange('subtitle', e.target.value, item.id)}
        />

        <Uploader
          onDrop={() => setIsUploading(true)}
          onFinishedUpload={({ filename }) => {
            const secureUrl = `https://s3-${s3Region}.amazonaws.com/${s3Name}/${filename}`;
            onFormChange('image', secureUrl, item.id);
            setIsUploading(false);
          }}
        />

        {i > 0 || itemsLength > 1
          ? <button className="secondary" onClick={e => onRemoveItem(item.id)}>Remove Item</button>
          : null}

        <style jsx>{`
          div {
            margin-bottom: 4rem;
          }
        `}</style>
      </div>
    );
  }
}

export default EditorItem;
