import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    FormHelperText,
    Grid
} from '@material-ui/core'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    formLogin: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
        width: '50%',
    }
}));

function Login() {
    const classes = useStyles();
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const usernameValue = (event) => {
        setUserName(event.target.value);
    };
    const passwordValue = (event) => {
        setPassword(event.target.value);
    };
    const logg = () => {
        console.log(username, password)
    }
    return (
        <React.Fragment align="center">
            <form align="center" className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3} className={classes.formLogin}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">UserName</InputLabel>
                            <Input id="component-simple" value={username} onChange={usernameValue} />
                            <FormHelperText id="component-helper-text">Enter your username </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">Password</InputLabel>
                            <Input id="component-simple" value={password} onChange={passwordValue} />
                            <FormHelperText id="component-helper-text">Enter your password </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined">
                            <Button component={Link} align="center" onClick={logg}
                                variant="contained" color="primary" to={{ pathname: '/Items', state: { username, password } }}>Login</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment >
    )
}

export default Login;