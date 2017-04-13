import React from 'react';

class EditorItem extends React.Component {
  render() {
    const { item, onFormChange } = this.props;
    return (
      <div>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={e => onFormChange('title', e.target.value, item.id)}
        />
        <input
          type="text"
          name="subtitle"
          value={item.subtitle}
          onChange={e => onFormChange('subtitle', e.target.value, item.id)}
        />
      </div>
    );
  }
}

export default EditorItem;
