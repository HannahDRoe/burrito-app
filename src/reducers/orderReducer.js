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

function addedToOrder (state = [], action) {
    switch (action.type) {
        case 'ADDED_TO_ORDER':
            console.log('A meal has been selected')
                return [
                   {    ...state,
                        order:[...state.order, action.foodItem]
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
        addedToOrder: addedToOrder(state.addedToOrder, action)
    }
}
export default orderMain;