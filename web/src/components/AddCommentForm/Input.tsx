import styled from 'styled-components';

import BaseInput from '../Input';

const Input = styled(BaseInput).attrs({
  type: 'text',
  autoCapitalize: 'off',
  spellCheck: false,
  autoCorrect: 'off',
  autoComplete: 'off'
})`
  padding-left: 0;
`;

export default Input;
