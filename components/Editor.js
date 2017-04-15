import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import EditorItem from './EditorItem';
import TextareaAutosize from 'react-autosize-textarea';

@inject('store')
@observer
class Editor extends React.Component {
  componentDidMount() {
    this.title.textarea.focus();

    // Add first item.
    this.props.store.delivery.addNewItem();
  }

  render() {
    const {
      editor,
      onFormChange,
      addNewItem,
      removeItem,
      postDelivery,
    } = this.props.store.delivery;
    return (
      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <TextareaAutosize
            name="title"
            placeholder="Delivery Title"
            className="dashedInput title"
            ref={title => this.title = title}
            value={editor.title}
            onChange={e => onFormChange('title', e.target.value)}
          />

          <TextareaAutosize
            name="subtitle"
            placeholder="Add a Description (optional)"
            className="dashedInput subtitle"
            value={editor.subtitle}
            onChange={e => onFormChange('subtitle', e.target.value)}
          />

          <div className="divider" />

          <div id="items">
            {editor.items.map(item => (
              <EditorItem
                key={item.id}
                item={item}
                onFormChange={onFormChange}
                onRemoveItem={removeItem}
              />
            ))}
          </div>

          <div id="controls">
            <button onClick={() => addNewItem()}>Add new item</button>
            <button onClick={() => postDelivery()}>Save & Share</button>
          </div>

        </form>

        <style jsx>{`
          form {
            margin-top: 4rem;
          }

          #items {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          #controls {
            display: flex;
            margin-bottom: 4rem;
            justify-content: space-between;
          }
        `}</style>
      </div>
    );
  }
}

export default Editor;
