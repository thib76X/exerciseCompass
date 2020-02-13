import React from 'react';
import {
    makeStyles,
    Paper,
    ListSubheader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Checkbox,
    Hidden,
    Button,
    TextField,
    InputAdornment,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import AdultIcon from '@material-ui/icons/SportsKabaddi';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    '@global':{
        '*::-webkit-scrollbar-track': {
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        borderRadius: '10px',
        backgroundColor: '#F5F5F5',
        },
        '*::-webkit-scrollbar':{
        width: '12px',
        backgroundColor: '#F5F5F5',
        },
        '*::-webkit-scrollbar-thumb':{
        borderRadius: '10px',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
        backgroundColor: '#aeaeae',
        }
    }
}));

function Filter(props){
    const classes = useStyles();

    return (
        <Paper style={props.customizedStyle} elevation={24} >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={{display:'flex', justifyContent:'space-between', padding:'3px'}}>
                        Filter Section
                        <Hidden mdUp>
                            <Button variant={'outlined'} onClick={()=>props.onFilterDrawerOff()}>Close</Button>
                        </Hidden>
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={()=>props.onOpenSizing()}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sizing" />
                    {props.openSizing ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={props.openSizing} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=>props.onCheckAdult()}>
                            <Hidden mdDown>
                                <ListItemIcon>
                                    <AdultIcon />
                                </ListItemIcon>
                            </Hidden>
                            <ListItemText primary="Adult" />
                            <ListItemIcon>
                                <Checkbox
                                    checked={props.checkAdult}
                                    disableRipple
                                />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=>props.onCheckKid()}>
                            <Hidden mdDown>
                                <ListItemIcon>
                                    <AdultIcon />
                                </ListItemIcon>
                            </Hidden>
                            <ListItemText primary="Kid" />
                            <ListItemIcon>
                                <Checkbox
                                    checked={props.checkKid}
                                    disableRipple
                                />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Collapse>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Product Name"
                            onChange={(event)=>props.onResearchProduct(event.target.value)}
                            value={props.researchProduct}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </ListItem>
                </List>
            </List>
        </Paper>
    );
}

Filter.defaultProps={
    customizedStyle:{width:'100%', height:'100%', border:'solid 1px black', overflow:'auto'}
}

Filter.propTypes={
    customizedStyle:PropTypes.object,
}

const mapStateToProps = (state) => {
    return {
        filterDrawer: state.filterDrawer,
        openSizing: state.openSizing,
        checkAdult: state.checkAdult,
        checkKid: state.checkKid,
        researchProduct: state.researchProduct
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterDrawerOff: () => dispatch ({type:'FILTERDRAWER_OFF'}),
        onOpenSizing: () => dispatch ({type:'OPEN_SIZING'}),
        onCheckAdult: () => dispatch ({type:'CKADULT_ON'}),
        onCheckKid: () => dispatch ({type:'CKKID_ON'}),
        onResearchProduct: (Rvalue2) => dispatch ({type:'SEARCH_CHANGED', searchValue:Rvalue2}),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);