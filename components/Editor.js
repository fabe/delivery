import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import EditorItem from './EditorItem';

@inject('store')
@observer
class Editor extends React.Component {
  render() {
    const {
      editor,
      onFormChange,
      addNewItem,
      removeItem,
      postDelivery,
    } = this.props.store.delivery;
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="title"
            value={editor.title}
            onChange={e => onFormChange('title', e.target.value)}
          />

          <input
            type="text"
            name="subtitle"
            value={editor.subtitle}
            onChange={e => onFormChange('subtitle', e.target.value)}
          />

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

          <button onClick={() => addNewItem()}>Add new item</button>
          <button onClick={() => postDelivery()}>Submit</button>
        </form>

        <style jsx>
          {`
          #items {
            margin-top: 20px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Editor;
