import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    width: 150px;
    height: 30px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    color: #FFF;
  }

  button:hover {
    opacity: 0.9;
  }
`;
