const initialState = {
    numberOfArticle:0,
    totalCartPrice:0,
    filterDrawer:false,
    cartDrawer:false,
    dialog:false,
    openSizing:false,
    checkAdult:false,
    checkKid:false,
    researchProduct:'',
    cartContent:[
        ]
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'CARTDRAWER_ON'){
        newState.cartDrawer = true;
    }
    if (action.type === 'CARTDRAWER_OFF'){
        newState.cartDrawer = false;
    }
    if (action.type === 'FILTERDRAWER_ON'){
        newState.filterDrawer = true;
    }
    if (action.type === 'FILTERDRAWER_OFF'){
        newState.filterDrawer = false;
        newState.openCategory=false;
        newState.openPricing=false;
        newState.openSizing=false;
    }
    if (action.type === 'DIALOG_ON'){
        newState.dialog = true;
    }
    if (action.type === 'DIALOG_OFF'){
        newState.dialog = false;
    }
    if (action.type === 'ADD_CART'){
        let isInCart = false;
        let impNumb = 0;
        for (let i=0; i<newState.cartContent.length;i++){
            if (action.myCusto.name === newState.cartContent[i].name){
                isInCart = true;
                impNumb=i;
                break;
            }
        }
        if (isInCart === false){
            newState.cartContent.push(action.myCusto);
        }
        else{
            newState.cartContent[impNumb].quantity++;
        }
        newState.numberOfArticle++;
        newState.totalCartPrice += action.myCusto.price;
    }
    if (action.type === 'REMOVE_CART'){
        let impNumb2 = 0;
        for (let i=0; i<newState.cartContent.length;i++){
            if (action.myCusto.name === newState.cartContent[i].name){
                impNumb2=i;
                break;
            }
        }
        newState.cartContent[impNumb2].quantity--;
        newState.numberOfArticle--;
        newState.totalCartPrice -= action.myCusto.price;
    }
    if (action.type === 'OPEN_SIZING'){
        newState.openSizing=!newState.openSizing;
    }
    if (action.type === 'CKADULT_ON'){
        newState.checkAdult=!newState.checkAdult;
    }
    if (action.type === 'CKKID_ON'){
        newState.checkKid=!newState.checkKid;
    }
    if (action.type === 'SEARCH_CHANGED'){
        newState.researchProduct = action.searchValue;
    }
    return newState;
};

export default reducer;