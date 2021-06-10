import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Login from '../components/Login/Login';
import Items from '../components/Items/Items';
import App from '../components/App/App';
import Signup from '../components/Signup/Signup'

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

function RouterComponent() {
    const classes = useStyles();
    return (
        <Router >
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Richmond UI
                        </Typography>
                        <Button component={Link}
                            to={{ pathname: '/Login', state: { hello: 'venu' } }}
                            color="primary" variant="contained">
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Route exact path="/" component={App} />
            <Route path="/Items" component={Items} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
        </Router>
    )
}

export default RouterComponent;