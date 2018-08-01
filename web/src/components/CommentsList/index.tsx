import * as React from 'react';

import List from './List';
import ListItem from './ListItem';

class CommentsList extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          userName="legend27"
          message="This item is just amazing, probably one of the best!"
        />
        <ListItem
          userName="ArianaGrande"
          message="Dunno what you talking about, looks legit 2 me"
        />
        <ListItem userName="taylorswift" message="Don’t understand how is it tier1 #trash" />
      </List>
    );
  }
}

export default CommentsList;
