import styled from 'styled-components';

type FormProps = {
  isExpanded?: boolean;
};

const Form = styled.form<FormProps>`
  overflow: hidden;
  height: ${props => (props.isExpanded ? '12rem' : 0)};
  transition: height 0.25s ease-in-out;
  padding-left: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export default Form;
