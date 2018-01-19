function entreeSelected (state = [] , action) {
    switch (action.type) {
        case 'ENTREE_SELECTED':
            console.log('An entree has been selected ' + action.entree);
                return{
                    ...state,
                   id: action.entree,
                   categories: action.categories
                }
       
        default:
           return state;
    }
  
}

function addToOrder (state = [], action) {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            console.log('A meal has been selected' +action.itemId)
                return  [...state,
                    {   index: action.index,
                        id: action.itemId,
                        name: action.itemName
                    }
                ]
                
        default:
           return state;
    }

}

function orderMain (state= {}, action){
    return {
        ...state,
        entree_selected: entreeSelected(state.entree_selected, action),
        orderList: addToOrder(state.orderList, action)
    }
}
export default orderMain;