export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((curItem) => {
                return curItem.id !==  action.payload;
            }),
        };
    }

    if(action.type === "CLEAR_ITEM"){
        return{
            ...state,
            item: [],
        }
    }

    if(action.type === "INCREMENT_QUANT"){
        const updateCart = state.item.map((curItem) => {
        if(curItem.id === action.payload){
            return {
                ...curItem, quantity: curItem.quantity + 1
            }
        }
        return curItem;
    });
    return {...state, item: updateCart };
    }

    if(action.type === "DECREMENT_QUANT"){
        const updateCart = state.item.map((curItem) => { 
            if(curItem.id === action.payload){
                return {
                    ...curItem, quantity: curItem.quantity - 1
                }
            }
            return curItem;
        })
    return {...state, item: updateCart };
    }

    return state;
}