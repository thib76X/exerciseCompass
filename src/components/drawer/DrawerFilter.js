import Filter from '../filter/Filter';
import {Drawer} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

function DrawerFilter(props) {
    return(
        <Drawer open={props.filterDrawer} onClose={()=>props.onFilterDrawerOff()}>
            <Filter customizedStyle={{width:'75wh', height:'100vh', overflow:'auto'}}/>
        </Drawer>
    )
}

const mapStateToProps = (state) => {
    return {
        filterDrawer: state.filterDrawer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterDrawerOff: () => dispatch ({type:'FILTERDRAWER_OFF'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerFilter);
