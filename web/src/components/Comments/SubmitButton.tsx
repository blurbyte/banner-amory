import * as React from 'react';

import { PaperPlane } from '../Icons';
import Button from '../Button';

class SubmitButton extends React.Component {
  render() {
    return (
      <Button type="submit" icon={PaperPlane} aria-label="Submit comment">
        Comment
      </Button>
    );
  }
}

export default SubmitButton;
