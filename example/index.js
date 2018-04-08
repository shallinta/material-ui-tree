import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import TreeDemo from './demo';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      light: '#ff79b0',
      main: pink.A200,
      dark: '#c60055',
      contrastText: '#fff'
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <TreeDemo />
  </MuiThemeProvider>,
  document.querySelector('#root')
);
