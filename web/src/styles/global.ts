import { injectGlobal } from 'styled-components';
import { transparentize } from 'polished';

import { Color } from './color';

// tslint:disable-next-line
injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${Color.White};
    color: ${Color.Blue};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    font-size: 1.4rem;
    font-weight: 400;
    overflow-y: scroll;
  }

  ::-moz-selection {
    background: ${transparentize(0.9, Color.Blue)};
    color: inherit;
  }

  ::selection {
    background: ${transparentize(0.9, Color.Blue)};
    color: inherit;
  }
`;
