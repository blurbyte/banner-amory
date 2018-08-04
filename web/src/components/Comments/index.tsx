import * as React from 'react';

import { Comment } from '@sharedTypes/Comment';
import AddComment from '../AddComment';
import CommentsList from '../CommentsList';
import Wrapper from './Wrapper';
import NoComments from './NoComments';

type CommentsProps = {
  itemId: number;
  comments: Comment[];
};

class Comments extends React.Component<CommentsProps> {
  render() {
    const { itemId, comments } = this.props;
    return (
      <Wrapper>
        <AddComment itemId={itemId} />
        {comments.length ? (
          <CommentsList comments={comments} />
        ) : (
          <NoComments>There are no comments here yet.</NoComments>
        )}
      </Wrapper>
    );
  }
}

export default Comments;
