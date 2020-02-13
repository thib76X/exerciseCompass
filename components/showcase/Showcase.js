import React from 'react';
import {products} from '../../assets/dataJSON/products';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    makeStyles,
    ListSubheader,
    useTheme,
    useMediaQuery
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        height:'100%',
        width:'100%',
        padding:'20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        border:'solid 1px black'
    },
    gridList: {
        height:'100%',
        width:'100%',
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

function Showcase(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));

    const blockCode = (tile)=>  <GridListTile key={tile.id} style={{border:'solid 1px black'}}>
        <img
            src={comparator(tile.imagePath)}
            alt={'we got a probem'}
            style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
            }}/>
        <GridListTileBar
            title={`Name: ${tile.name}`}
            style={{backgroundColor:'lightgrey'}}
            subtitle={
                <div>
                    Price: {tile.price}€
                    <br/>
                    Size: {tile.size}
                </div>
            }
            actionIcon={
                <>
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

    const switcher = (tile)=> {
        let myCount = 0;
        if (props.checkKid){ myCount++;}
        if (props.checkAdult){ myCount++;}
        if (props.researchProduct){ myCount++;}

        if (myCount === 1){
            if (props.checkKid) {return ((tile.size==='kid') ? blockCode(tile):null)}
            if (props.checkAdult) {return ((tile.size==='adult') ? blockCode(tile):null)}
            if (props.researchProduct) {return ((tile.name.toLowerCase().includes(props.researchProduct.toLowerCase())) ? blockCode(tile):null)}
        }
        if (myCount === 2){
            if (props.checkKid && props.checkAdult) {
                return (
                    (tile.size) ? blockCode(tile):null
                )
            }
            if (props.checkKid && props.checkAdult) {
                return (
                    (
                        tile.size==='kid'
                        &&tile.name.toLowerCase().includes(props.researchProduct.toLowerCase())
                    ) ? blockCode(tile):null
                )
            }
            if (props.checkAdult && props.checkAdult) {
                return (
                    (
                        tile.size==='adult'
                        &&tile.name.toLowerCase().includes(props.researchProduct.toLowerCase())
                    ) ? blockCode(tile):null
                )
            }
        }
        if (myCount === 3){
            return((tile.name.toLowerCase().includes(props.researchProduct.toLowerCase())) ? blockCode(tile):null)
        }
        return(blockCode(tile));
    }

    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={matches2 ? (matches ? 1: 2): 5}>
                <GridListTile key="Subheader" cols={matches2 ? (matches ? 1: 2) : 5} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Products</ListSubheader>
                </GridListTile>
                {products.map(tile => switcher(tile))}
            </GridList>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cartContent,
        checkAdult: state.checkAdult,
        checkKid: state.checkKid,
        researchProduct: state.researchProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (tile) => dispatch ({type:'ADD_CART', myCusto: {...tile, quantity:1}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);