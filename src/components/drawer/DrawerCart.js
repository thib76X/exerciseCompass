import {
    Drawer,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    makeStyles,
    ListSubheader,
    useTheme,
    useMediaQuery,
    Button
} from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        height:'100vh',
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height:'100vh',
        width:'80vw',
        padding:'10px'
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

function comparator(element){
    switch (element) {
        case 'adultBaseball':
            return require('../../assets/images/adultBaseball.jpg');
        case 'kidBaseball':
            return require('../../assets/images/kidBaseball.jpg');
        case 'adultFootball':
            return require('../../assets/images/adultFootball.jpg');
        case 'kidFootball':
            return require('../../assets/images/kidFootball.jpg');
        case 'adultBasket':
            return require('../../assets/images/adultBasket.jpg');
        case 'kidBasket':
            return require('../../assets/images/kidBasket.jpg');
        default:
            return require('../../assets/images/No-Image-Available.png');
    }
}

function DrawerCart(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Drawer anchor={'right'}  open={props.cartDrawer} onClose={()=>props.onCartDrawerOff()}>
                <GridList cellHeight={180} className={classes.gridList} cols={matches ? 1:2}>
                    <GridListTile key="Subheader" cols={matches ? 1:2} style={{ height: 'auto' }}>
                        <ListSubheader component="div" style={{display:'flex', justifyContent:'space-around', padding:'3px'}}>
                            Cart
                            <span>PRICE: {props.totalCartPrice}€</span>
                            <Button variant={'outlined'} onClick={()=>props.onDialogOn()}> Submit</Button>
                        </ListSubheader>
                    </GridListTile>
                    {props.cartContent.map(tile => tile.quantity===0 ? (null):(
                        <GridListTile key={tile.id} >
                            <img
                                src={comparator(tile.imagePath)}
                                alt={'we got a probem'}
                                style={{
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '50%',
                                }}
                            />
                            <GridListTileBar
                                title={`Name: ${tile.name}`}
                                style={{backgroundColor:'lightgrey'}}
                                subtitle={
                                    <div>
                                        Price: {tile.price}€
                                        <br/>
                                        Size: {tile.size}
                                        <br/>
                                        Quantity: {tile.quantity}
                                    </div>
                                }
                                actionIcon={
                                    <>
                                        <IconButton
                                            aria-label={`info about ${tile.name}`}
                                            style={{color:'#a91713'}}
                                            onClick={()=>props.onRemoveToCart(tile)}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label={`info about ${tile.name}`}
                                            style={{color:'#559233'}}
                                            onClick={()=>props.onAddToCart(tile)}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
        </Drawer>
    );
}

const mapStateToProps = (state) => {
    return {
        cartDrawer: state.cartDrawer,
        totalCartPrice: state.totalCartPrice,
        cartContent: state.cartContent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCartDrawerOff: () => dispatch ({type:'CARTDRAWER_OFF'}),
        onAddToCart: (tile) => dispatch ({type:'ADD_CART', myCusto: {...tile, quantity:1}}),
        onRemoveToCart: (tile) => dispatch ({type:'REMOVE_CART', myCusto: {...tile, quantity:1}}),
        onDialogOn: () => dispatch ({type:'DIALOG_ON'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);