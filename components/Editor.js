import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import EditorItem from './EditorItem';
import TextareaAutosize from 'react-autosize-textarea';
import ErrorBar from '../components/ErrorBar';

@inject('store')
@observer
class Editor extends React.Component {
  componentDidMount() {
    this.title.textarea.focus();
  }

  render() {
    const {
      editor,
      onFormChange,
      addNewItem,
      removeItem,
      postDelivery,
      isCreatingDelivery,
      setIsUploading,
      isUploading,
      showErrorModal,
      error,
    } = this.props.store.delivery;

    return (
      <div className="container">
        <ErrorBar show={showErrorModal} error={error} />
        <form onSubmit={e => e.preventDefault()}>
          <TextareaAutosize
            name="masthead"
            placeholder="Name or Company (optional)"
            className={`dashedInput masthead`}
            value={editor.masthead}
            onChange={e => onFormChange('masthead', e.target.value)}
          />

          <TextareaAutosize
            name="title"
            placeholder="Delivery Title"
            className={`dashedInput title ${error === 'no-title' ? 'error' : null}`}
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
            {editor.items.map((item, i) => (
              <EditorItem
                key={item.id}
                item={item}
                i={i}
                itemsLength={editor.items.length}
                onFormChange={onFormChange}
                onRemoveItem={removeItem}
                setIsUploading={setIsUploading}
              />
            ))}
          </div>

          <div id="controls">
            <button onClick={() => addNewItem()}>Add new item</button>
            <button
              onClick={() => postDelivery()}
              className={isCreatingDelivery ? 'loading' : null}
              disabled={isUploading > 0 || isCreatingDelivery}
            >
              Save & Share
            </button>
          </div>

        </form>

        <style jsx>{`
          form {
            margin-top: 4rem;
          }

          #items {
            margin-top: 2rem;
          }

          #controls {
            display: flex;
            margin-bottom: 4rem;
            padding-top: 4rem;
            justify-content: space-between;
            border-top: 2px solid #eee;
          }
        `}</style>
      </div>
    );
  }
}

export default Editor;
