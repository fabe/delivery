import React from 'react';
import Uploader from './Uploader';
import TextareaAutosize from 'react-autosize-textarea';
import { s3Name, s3Region } from '../config';

class EditorItem extends React.Component {
  constructor() {
    super();
    this.renderMoveButtons = this.renderMoveButtons.bind(this);
  }

  renderMoveButtons() {
    const { item, onItemMove, i, itemsLength } = this.props;
    let showUp = true;
    let showDown = true;

    if (i === 0 && itemsLength === 1) {
      showUp = false;
      showDown = false;
    } else if (i === 0) {
      showUp = false;
    } else if (i === itemsLength - 1) {
      showDown = false;
    }

    return (
      <span>
        {showUp
          ? <button className="secondary move-up" onClick={e => onItemMove(item.id, true)}>
              Move Up
            </button>
          : null}
        {showDown
          ? <button className="secondary move-down" onClick={e => onItemMove(item.id, false)}>
              Move Down
            </button>
          : null}

        <style jsx>{`
          button {
            margin-left: 1rem;
            text-indent: -99999px;
            background-repeat: no-repeat;
            background-position: center;
          }

          .move-up { background-image: url('/static/ico-up.svg'); }
          .move-down { background-image: url('/static/ico-down.svg'); }
        `}</style>
      </span>
    );
  }
  render() {
    const {
      item,
      onFormChange,
      onRemoveItem,
      onItemMove,
      setIsUploading,
      itemsLength,
      i,
    } = this.props;

    return (
      <div className="editor-item">
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

        <div className="controls">
          {i > 0 || itemsLength > 1
            ? <button className="secondary" onClick={e => onRemoveItem(item.id)}>
                Remove Item
              </button>
            : null}

          {this.renderMoveButtons()}
        </div>

        <style jsx>{`
          .editor-item {
            transition: 1s all ease;
            margin-bottom: 4rem;
          }

          .controls {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </div>
    );
  }
}

export default EditorItem;
