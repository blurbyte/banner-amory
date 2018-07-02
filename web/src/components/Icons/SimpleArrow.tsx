import * as React from 'react';

class SimpleArrow extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12" width="24" height="12">
        <path d="M0 0h24L12 12 0 0z" fill="currentColor" />
        <path d="M6 0h12l-6 6-6-6z" fill="#3d26da" />
      </svg>
    );
  }
}

export default SimpleArrow;
