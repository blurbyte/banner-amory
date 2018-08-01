import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 15rem 1fr;
  height: 3rem;
  align-items: end;
`;

const Name = styled.span`
  font-weight: 600;
  padding-right: 1rem;
`;

const Message = styled.span`
  font-weight: 400;
`;

type ListItemProps = {
  userName: string;
  message: string;
};

class ListItem extends React.Component<ListItemProps> {
  render() {
    const { userName, message } = this.props;

    return (
      <Wrapper>
        <Name>{userName}</Name>
        <Message>{message}</Message>
      </Wrapper>
    );
  }
}

export default ListItem;
