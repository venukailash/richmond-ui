import React from 'react';
import Table from '@material-ui/core/Table';
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
import getItems from '../../lib/api/getItems'
import './App.css';

class App extends React.Component {

  state = {
    isLoading: true,
    users: [],
    error: null
  }

  componentDidMount() {
    getItems()
    .then(res => {this.setState({ posts: res, isLoading: false })});
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Richmond UI
          </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Availability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isLoading ? (
                  posts.map((row) => {
                    return (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.availability}</TableCell>
                      </TableRow>);
                  }))
                  : (
                    <p>Loading...</p>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
