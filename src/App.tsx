import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import IndexPage from '~/pages/Index';

const theme = createMuiTheme({
  palette: {
    success: {
      main: '#ff6600'
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
