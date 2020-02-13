import React from 'react';
import {
    makeStyles,
    AppBar,
    Typography,
    Badge,
    Hidden
} from '@material-ui/core';
import {styles} from '../../assets/jss/components/header/HeaderStyle';
import {Lottie} from '@crello/react-lottie';
import pushUpData from '../../assets/images/15260-pushups';
import mailData from '../../assets/images/open-letter';
import tuneData from '../../assets/images/tune';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';


const useStyles = makeStyles(styles);

const pushUpOptions = {
    loop: true,
    autoplay: true,
    animationData: pushUpData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
    }
};

const mailOptions = {
    loop: true,
    autoplay: true,
    animationData: mailData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMin meet',
    }
};

const tuneOptions = {
    loop: true,
    autoplay: true,
    animationData: tuneData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMin meet',
    }
};

function Header(props) {
    const classes = useStyles();
    const [mail, setMailHover] = React.useState('stopped');
    const [tune, setTuneHover] = React.useState('stopped');

    return (
            <AppBar position="relative" className={classes.appBarMain}>
                    <Lottie
                            config={pushUpOptions}
                            height={'100%'}
                            width={'20%'}
                    />
                    <Typography datavariant="h6" className={classes.titleAllPlace}>
                        {props.titleH}
                    </Typography>
                <Hidden mdUp>
                <div
                    className={classes.iconDiv}
                    onMouseEnter={()=>{setTuneHover('playing')}}
                    onMouseLeave={()=>{setTuneHover('stopped')}}
                    onClick={()=>props.onFilterDrawerOn()}
                >
                    <Lottie
                        config={tuneOptions}
                        height={'100%'}
                        width={'100%'}
                        playingState={tune}
                    />
                </div>
                </Hidden>
                    <div
                        className={classes.iconDiv}
                        onMouseEnter={()=>{setMailHover('playing')}}
                        onMouseLeave={()=>{setMailHover('stopped')}}
                        onClick={()=>props.onDialogOn()}
                    >
                        <Lottie
                            config={mailOptions}
                            height={'100%'}
                            width={'100%'}
                            playingState={mail}
                        />
                    </div>
                <div className={classes.iconDiv} onClick={()=>props.onCartDrawerOn()}>
                    <Badge badgeContent={props.numberOfArticle} color="secondary" style={{right:'5px'}}>
                        <ShoppingCart style={{stroke:'black'}} fontSize={"large"} />
                    </Badge>
                </div>
            </AppBar>
    );
}

const mapStateToProps = (state) => {
    return {
        numberOfArticle: state.numberOfArticle,
        filterDrawer: state.filterDrawer,
        cartDrawer: state.cartDrawer,
        dialog: state.dialog,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCartDrawerOn: () => dispatch ({type:'CARTDRAWER_ON'}),
        onCartDrawerOff: () => dispatch ({type:'CARTDRAWER_OFF'}),
        onFilterDrawerOn: () => dispatch ({type:'FILTERDRAWER_ON'}),
        onFilterDrawerOff: () => dispatch ({type:'FILTERDRAWER_OFF'}),
        onDialogOn: () => dispatch ({type:'DIALOG_ON'}),
        onDialogOff: () => dispatch ({type:'DIALOG_OFF'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);