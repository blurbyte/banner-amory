import * as React from 'react';

class PaperPlane extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 38" width="46" height="38">
        <path
          d="M5.972 12.497s-2.845.837-3.746 1.236c-.094.042-2.135.473-2.226.516 1.209.849 2.82 1.155 3.539 2.49.081-.019 1.374.582 1.457.564l2.757 1.806c.48.055 1.027.517 1.2.786l5.043 3.303-.404 13.809 7.745-8.226 3.121 2.026c1.341.635 2.668 1.592 3.944 2.226 1.798.893 2.08 2.061 3.847 3.014.377.203 1.634.812 3.039 1.954.156-1.882.482-3.276.791-4.272C38.688 25.334 46 0 46 0L5.972 12.497z"
          fill="#e2abff"
        />
        <path
          d="M18.648 20.386l-.055 10.065-3.666 3.705.066-10.971 3.655-2.799zM6.001 16.479l8.478 5.553 3.901-2.395-11.816-6.29s-1.751.464-3.025.876c.676.64 2.333 2.117 2.462 2.256zM43.463 2.067l.617-.432L7.228 13.14l11.607 6.179L43.463 2.067zm-1.71 1.829L19.565 19.731l-.342 9.037 22.53-24.872zm2.041-1.463L25.552 22.896l10.473 5.576 8.248-26.577-.479.538zM29.516 28.937l-.525 2.849s3.99 2.325 5.006 3.222l.003-.009 1.876-6.046-10.663-5.677-3.25 3.948 5.338 3.465 2.215-1.752z"
          fill="#3d26da"
        />
      </svg>
    );
  }
}

export default PaperPlane;