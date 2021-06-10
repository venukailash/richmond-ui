import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    FormHelperText,
    Grid,
    Typography,
    Switch
} from '@material-ui/core'
import { Link } from "react-router-dom";
import register from '../../lib/api/register';

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
        background: 'linear-gradient(45deg, #4ca1af 30%, #c4e0e5 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
    }
}));

function Signup() {
    const classes = useStyles();

    const _registrationDetails = {
        "type": "Personal",
        "firstName": "",
        "lastName": "",
        "businessName": "",
        "registeredName": "",
        "address1": "",
        "address2": "",
        "city": "",
        "_state": "",
        "pincode": ""
    }

    const [registrationDetails, setRegistrationDetails] = useState(_registrationDetails);
    const [isPersonalBusiness, setPersonalBusiness] = useState(true);
    const regDetailsValue = (event) => {
        setRegistrationDetails((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    };
    const setPersonalBusinessValue = (event) => {
        setPersonalBusiness(event.target.checked);
        registrationDetails.type = event.target.checked ? 'Personal' : 'Business';
    };

    const logg = () => {
        console.log(registrationDetails);
        register(registrationDetails)
            .then(res => console.log(res));
    };

    return (
        <React.Fragment align="center">
            <form align="center" className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3} className={classes.formLogin}>
                    <Grid item xs={12}>
                        <Typography align="left" variant="subtitle1">{isPersonalBusiness ? 'Personal' : 'Business'}
                            <Switch checked={isPersonalBusiness} onChange={setPersonalBusinessValue}></Switch>
                        </Typography>
                    </Grid>
                    {
                        isPersonalBusiness ?
                            <Grid item xs={6}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                                    <Input id="firstName" value={registrationDetails.firstName} onChange={regDetailsValue} />
                                    <FormHelperText id="component-helper-text">Enter your first name </FormHelperText>
                                </FormControl>
                            </Grid>
                            :
                            <Grid item xs={6}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-simple">Business Name</InputLabel>
                                    <Input id="businessName" value={registrationDetails.businessName} onChange={regDetailsValue} />
                                    <FormHelperText id="component-helper-text">Enter Business Name </FormHelperText>
                                </FormControl>
                            </Grid>
                    }
                    {
                        isPersonalBusiness ?
                            <Grid item xs={6}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                                    <Input id="lastName" value={registrationDetails.lastName} onChange={regDetailsValue} />
                                    <FormHelperText id="component-helper-text">Enter your last name </FormHelperText>
                                </FormControl>
                            </Grid>
                            :
                            <Grid item xs={6}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-simple">Registration Name</InputLabel>
                                    <Input id="registeredName" value={registrationDetails.registeredName} onChange={regDetailsValue} />
                                    <FormHelperText id="component-helper-text">Enter Registration Name</FormHelperText>
                                </FormControl>
                            </Grid>
                    }
                    <Grid item xs={6}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">Address Line 1 </InputLabel>
                            <Input id="address1" value={registrationDetails.address1} onChange={regDetailsValue} />
                            <FormHelperText id="component-helper-text">Enter Address Line 1</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">Address Line 2 </InputLabel>
                            <Input id="address2" value={registrationDetails.address2} onChange={regDetailsValue} />
                            <FormHelperText id="component-helper-text">Enter Address Line 2</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">City </InputLabel>
                            <Input id="city" value={registrationDetails.city} onChange={regDetailsValue} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">State </InputLabel>
                            <Input id="_state" value={registrationDetails._state} onChange={regDetailsValue} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-simple">Pincode </InputLabel>
                            <Input id="pincode" value={registrationDetails.pincode} onChange={regDetailsValue} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined">
                            <Button component={Link} align="center" onClick={logg}
                                variant="contained" color="primary">Register</Button>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">Already Registered?
                                <Link to={{ pathname: '/Login' }}>Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment >
    )
}

export default Signup;