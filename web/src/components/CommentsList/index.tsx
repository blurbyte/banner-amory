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
        {comments.map(comment => (
          <ListItem
            key={`${comment.userName}-${comment.id}`}
            userName={comment.userName}
            message={comment.message}
          />
        ))}
      </List>
    );
  }
}

export default CommentsList;
