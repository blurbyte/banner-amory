import * as React from 'react';

import { Comment } from '@sharedTypes/Comment';
import List from './List';
import ListItem from './ListItem';

type CommentsListProps = {
  comments: Comment[];
};

class CommentsList extends React.Component<CommentsListProps> {
  render() {
    const { comments } = this.props;
    return (
      <List>
        {comments.map((comment, index) => (
          <ListItem
            key={`${comment.userName}-${index}`}
            userName={comment.userName}
            message={comment.message}
          />
        ))}
      </List>
    );
  }
}

export default CommentsList;
