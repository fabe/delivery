import React from 'react';

class ErrorBar extends React.Component {
  render() {
    return (
      <div className={this.props.show ? 'show' : null}>
        {this.props.error === 'no-title' ? 'Please add a title for your delivery.' : null}
        {this.props.error === 'no-items' ? 'Please add at least one image to your delivery.' : null}

        <style jsx>{`
          div {
            position: fixed;
            top: -3rem; left: 0;
            height: 3rem;
            width: 100%;
            color: #fff;
            background-color: #ff3a30;
            line-height: 3rem;
            text-align: center;
            font-size: 0.7rem;
            font-weight: 500;
            z-index: 420;
            visibility: hidden;
            transition: .2s all ease-out;
          }

          div.show {
            top: 0;
            opacity: 1;
            visibility: visible;
          }
        `}</style>
      </div>
    );
  }
}

export default ErrorBar;
