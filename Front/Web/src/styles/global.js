import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import  url(href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet");

* {
  margin: 0;
  pading: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button, p {
  font-size: 14px;
  font-family: Roboto, sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
`;
