import styled from 'styled-components';

type FormProps = {
  isExpanded?: boolean;
};

const Form = styled.form<FormProps>`
  overflow: hidden;
  height: ${props => (props.isExpanded ? '14rem' : 0)};
  transition: height 0.25s ease-in-out;
  padding-left: 10rem;
`;

export default Form;
