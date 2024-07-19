import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  scroll-behavior: smooth;

  > h1 {
  font-size: 32px;
  font-weight: 500;
  }
}
`;
export default GlobalStyles;
