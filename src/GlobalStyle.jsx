import { createGlobalStyle } from 'styled-components';

import JostRegularEot from './assets/fonts/Jost-Regular.eot';
import JostRegularSvg from './assets/fonts/Jost-Regular.svg';
import JostRegularTtf from './assets/fonts/Jost-Regular.ttf';
import JostRegularWoff from './assets/fonts/Jost-Regular.woff';
import JostRegularWoff2 from './assets/fonts/Jost-Regular.woff2';
import JostItalicEot from './assets/fonts/Jost-Italic.eot';
import JostItalicSvg from './assets/fonts/Jost-Italic.svg';
import JostItalicTtf from './assets/fonts/Jost-Italic.ttf';
import JostItalicWoff from './assets/fonts/Jost-Italic.woff';
import JostItalicWoff2 from './assets/fonts/Jost-Italic.woff2';
import JostBoldEot from './assets/fonts/Jost-Bold.eot';
import JostBoldSvg from './assets/fonts/Jost-Bold.svg';
import JostBoldTtf from './assets/fonts/Jost-Bold.ttf';
import JostBoldWoff from './assets/fonts/Jost-Bold.woff';
import JostBoldWoff2 from './assets/fonts/Jost-Bold.woff2';
import JostBoldItalicEot from './assets/fonts/Jost-BoldItalic.eot';
import JostBoldItalicSvg from './assets/fonts/Jost-BoldItalic.svg';
import JostBoldItalicTtf from './assets/fonts/Jost-BoldItalic.ttf';
import JostBoldItalicWoff from './assets/fonts/Jost-BoldItalic.woff';
import JostBoldItalicWoff2 from './assets/fonts/Jost-BoldItalic.woff2';

export default createGlobalStyle`

@font-face {
  font-family: 'Jost';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${JostRegularEot});
  src: url(${JostRegularEot}) format('embedded-opentype'),
    url(${JostRegularWoff2}) format('woff2'),
    url(${JostRegularWoff}) format('woff'),
    url(${JostRegularTtf}) format('truetype'),
    url(${JostRegularSvg}) format('svg');
  }

  @font-face {
    font-family: 'Jost';
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src: url(${JostItalicEot});
    src: url(${JostItalicEot}) format('embedded-opentype'),
      url(${JostItalicWoff2}) format('woff2'),
      url(${JostItalicWoff}) format('woff'),
      url(${JostItalicTtf}) format('truetype'),
      url(${JostItalicSvg}) format('svg');
  }

  @font-face {
    font-family: 'Jost';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${JostBoldEot});
    src: url(${JostBoldEot}) format('embedded-opentype'),
      url(${JostBoldWoff2}) format('woff2'),
      url(${JostBoldWoff}) format('woff'),
      url(${JostBoldTtf}) format('truetype'),
      url(${JostBoldSvg}) format('svg');
  }

  @font-face {
    font-family: 'Jost';
    font-weight: bold;
    font-style: italic;
    font-display: swap;
    src: url(${JostBoldItalicEot});
    src: url(${JostBoldItalicEot}) format('embedded-opentype'),
      url(${JostBoldItalicWoff2}) format('woff2'),
      url(${JostBoldItalicWoff}) format('woff'),
      url(${JostBoldItalicTtf}) format('truetype'),
      url(${JostBoldItalicSvg}) format('svg');
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Jost';

  h1 {
  font-size: 2.1em;
  font-weight: 500;
  }

  a {
  text-decoration: none;
  color: #000;
  }

  button {
    cursor: pointer;
  }
}
`;
