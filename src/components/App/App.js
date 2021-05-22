import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import getItems from '../../lib/api/getItems';
import Login from '../Login/Login';
import {
  BrowserRouter as Router,
  Switch,
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

  state = {
    isLoading: true,
    users: [],
    error: null
  }

  componentDidMount() {
    getItems()
      .then(res => { this.setState({ posts: res, isLoading: false }) });
  }

  render() {
    const { isLoading, posts } = this.state;
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
            <Switch>
              <Route exact path="/">
                <TableContainer align="center" component={Paper} className={classes.container} >
                  <Table stickyHeader className={classes.table} size="small" aria-label="simple table">
                    <TableHead >
                      <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Availability</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {!isLoading ? (
                        posts.map((row) => {
                          return (
                            <TableRow key={row.id}>
                              <TableCell >{row.name}</TableCell>
                              <TableCell align="right">{row.description}</TableCell>
                              <TableCell align="right">{row.amount}</TableCell>
                              <TableCell align="right">{String(row.availability)}</TableCell>
                            </TableRow>);
                        }))
                        : (
                          <p>Loading...</p>
                        )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(App);
