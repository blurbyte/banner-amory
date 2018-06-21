import { injectGlobal } from 'styled-components';
import { Colors } from './colors';

// tslint:disable-next-line
injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${Colors.white};
    color: ${Colors.blue};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    font-size: 1.4rem;
    font-weight: 400;
    overflow-y: scroll;
  }
`;
