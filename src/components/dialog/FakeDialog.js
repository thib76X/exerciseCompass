import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';
import { connect } from 'react-redux';

function FakeDialog(props) {
    return(
        <Dialog
            open={props.dialog}
            onClose={()=>props.onDialogOff()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"FAKE DIALOG"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lectus eu massa semper ultrices in pellentesque magna. Suspendisse eget leo consequat, efficitur eros sit amet, bibendum odio. Proin finibus vehicula nulla nec ullamcorper. Quisque at bibendum odio. Curabitur egestas ipsum ut convallis feugiat. Praesent volutpat, nibh mattis bibendum euismod, lorem arcu semper enim, quis ultrices ipsum ligula facilisis purus.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>props.onDialogOff()} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogOff: () => dispatch ({type:'DIALOG_OFF'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FakeDialog);
