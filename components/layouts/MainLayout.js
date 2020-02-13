import React from 'react';
import {
    Grid,
    makeStyles,
    Hidden
} from '@material-ui/core';
import {styles} from '../../assets/jss/components/layouts/MainLayoutStyle';

const useStyles = makeStyles(styles);

function MainLayout(props) {
    const classes = useStyles ();

    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridItemHeader}>
                {props.header ? props.header : 'error with the header'}
            </Grid>
            <Hidden smDown>
            <Grid item md={3} className={classes.gridItemFilter}>
                {props.filter ? props.filter : 'error with the filter'}
            </Grid>
            </Hidden>
            <Grid item xs={12} md={9} className={classes.gridItemProduct}>
                {props.show? props.show : 'error with the showcase'}
            </Grid>
            <Grid item xs={12} className={classes.gridItemFooter}>
                {props.footer ? props.footer : 'error with the footer'}
            </Grid>
        </Grid>
    );
}



export default MainLayout;