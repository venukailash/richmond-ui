import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getItems from '../../lib/api/getItems';


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
class Items extends React.Component {

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
        console.log(this.props)
        return (
            <React.Fragment>
                <div className={classes.root}>
                    
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
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(Items);
