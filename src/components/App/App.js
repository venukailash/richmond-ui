import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    maxHeight: 440,
    maxWidth: '75%',
    margin: 'auto',
  },
});
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(App);
