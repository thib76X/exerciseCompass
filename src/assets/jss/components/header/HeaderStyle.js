export const styles = {
    appBarMain:{
        position:'relative',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderBottom:'solid 0.5px black'
    },
    titleAllPlace: {
        flexGrow:1,
        color: 'black',
        letterSpacing:'1px',
        padding: '5px'
    },
    iconDiv: {
        height:'70%',
        width:'15%',
        borderLeft:'solid 1px black',
        padding:'10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        webkitTransition: 'all 0.2s ease',
        mozTransition: 'all 0.2s ease',
        oTransition: 'all 0.2s ease',
        transition: 'all 0.2s ease',
        zIndex:0,
        webkitTapHighlightColor: 'rgba(0,0,0,0)',
        '&:hover':{
            zIndex:1000,
            boxShadow: 'rgba(0, 0, 0, 0.3) 0 16px 16px 0',
            webkitBoxShadow: 'rgba(0, 0, 0, 0.3) 0 16px 16px 0',
            mozBoxShadow: 'rgba(0, 0, 0, 0.3) 0 16px 16px 0',
            cursor:'pointer'
        }
    }
}