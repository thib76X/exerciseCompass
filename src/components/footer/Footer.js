import React from 'react';
import {Lottie} from '@crello/react-lottie';
import fbData from '../../assets/images/facebook-circled-rotation';
import lkdData from '../../assets/images/linkedin-circled-rotation';
import twtData from '../../assets/images/twitter-circled-rotation';
import {makeStyles} from '@material-ui/core';
import {styles} from '../../assets/jss/components/footer/FooterStyle';
import { connect } from 'react-redux';

const useStyles = makeStyles(styles);

const fbOptions = {
    loop: true,
    autoplay: true,
    animationData: fbData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
    }
};

const lkdOptions = {
    loop: true,
    autoplay: true,
    animationData: lkdData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
    }
};

const twtOptions = {
    loop: true,
    autoplay: true,
    animationData: twtData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
    }
};



function Footer(props) {
    const classes = useStyles();
    const [fbHover, setFbHover] = React.useState('stopped');
    const [lkdHover, setLkdHover] = React.useState('stopped');
    const [twtHover, setTwtHover] = React.useState('stopped');

    return(
        <div style={{borderTop:'solid 1px black', height:'100%', width:'100%', display:'flex',
            flexDirection:'row', background:'lightgrey'}}>
            <div style={{height:'100%', width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <span data-testedid='adressSpan' style={{textAlign:'center'}}>
                    Adress: {props.adressA}
                </span>
                <span style={{textAlign:'center'}}>
                    Tel: +336.XX.XX.XX.XX
                </span>
            </div>
            <div style={{height:'100%', width:'50%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div style={{textAlign:'center'}}>
                    FOLLOW US ON:
                </div>
                <div
                    className={classes.iconFooter}
                    onMouseEnter={()=>{setFbHover('playing')}}
                    onMouseLeave={()=>{setFbHover('stopped')}}
                    onClick={()=>props.onDialogOn()}
                >
                    <Lottie
                        config={fbOptions}
                        height={'100%'}
                        width={'100%'}
                        playingState={fbHover}
                    />
                </div>
                <div
                    className={classes.iconFooter}
                    onMouseEnter={()=>{setTwtHover('playing')}}
                    onMouseLeave={()=>{setTwtHover('stopped')}}
                    onClick={()=>props.onDialogOn()}
                >
                    <Lottie
                        config={twtOptions}
                        height={'100%'}
                        width={'100%'}
                        playingState={twtHover}
                    />
                </div>
                <div
                    className={classes.iconFooter}
                    onMouseEnter={()=>{setLkdHover('playing')}}
                    onMouseLeave={()=>{setLkdHover('stopped')}}
                    onClick={()=>props.onDialogOn()}
                >
                    <Lottie
                        config={lkdOptions}
                        height={'100%'}
                        width={'100%'}
                        playingState={lkdHover}
                    />
                </div>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogOn: () => dispatch ({type:'DIALOG_ON'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);