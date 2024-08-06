import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  html, body {\n    height: 100%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: \'Droid Sans\', sans-serif;\n    font-size: 20px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Yanone Kaffeesatz\', sans-serif;\n    font-weight: 400;\n    margin: 0 0 1rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.75rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n\n  li {\n    margin: 0 0 0.5rem;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  a {\n    color: #F92672;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 0 0 1rem;\n  }\n\n  code {\n    background: #e7e8e2;\n    border-radius: 5px;\n    font-family: monospace;\n  }\n\n  button {\n    font-family: \'Yanone Kaffeesatz\';\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #F92672;\n    color: #fff;\n    font-weight: 400;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n'], ['\n  html, body {\n    height: 100%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: \'Droid Sans\', sans-serif;\n    font-size: 20px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Yanone Kaffeesatz\', sans-serif;\n    font-weight: 400;\n    margin: 0 0 1rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.75rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n\n  li {\n    margin: 0 0 0.5rem;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  a {\n    color: #F92672;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 0 0 1rem;\n  }\n\n  code {\n    background: #e7e8e2;\n    border-radius: 5px;\n    font-family: monospace;\n  }\n\n  button {\n    font-family: \'Yanone Kaffeesatz\';\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #F92672;\n    color: #fff;\n    font-weight: 400;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n']);

import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

export default function DefaultTheme() {
  return React.createElement(
    Fragment,
    null,
    React.createElement(GlobalStyles, null),
    React.createElement('link', {
      href: 'https://fonts.googleapis.com/css?family=Droid+Sans|Yanone+Kaffeesatz',
      rel: 'stylesheet',
      type: 'text/css'
    })
  );
}

var GlobalStyles = createGlobalStyle(_templateObject);