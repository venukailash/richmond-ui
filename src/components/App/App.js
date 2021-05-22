import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from '../Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
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
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Router>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Richmond UI
          </Typography>
                <Button component={Link} color="inherit" to="/Login">Login</Button>
              </Toolbar>
            </AppBar>
            <Route path="/Login">
              <Login />
            </Route>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(App);
