function entreeSelected (state  , action) {
    switch (action.type) {
        case 'ENTREE_SELECTED':
                return{
                    ...state,
                   id: action.entree,
                }
        case 'ADD_TO_ORDER':
                return{...state,
                    ingredients_selected:[...state.ingredients_selected, 
                        {
                            id: action.itemId,
                            name: action.itemName,
                            category: action.itemCategory
                        }
                    ]
                }

                                
        case 'RESET_ORDER':
            return {    id: null,
                        ingredients_selected:[]
                    };
        default:
           return state;
    }
  
}

// function addToOrder (state = [], action) {
//         default:
//            return state;
//     }

// }

function addToTotalOrderPrice(state=0, action){
    switch (action.type) {
        case 'ADD_TO_ORDER':
        console.log('added to total order pricE! ' + action.itemPrice)
            return { ...state,
                total: state.total + action.itemPrice
            }
        
        case 'RESET_ORDER':
            return state={total: 0};
        default:
            return state;
    }
}

function orderMain (state= {}, action){
    return {
        ...state,
        entree_selected: entreeSelected(state.entree_selected, action),
        // ingredients_selected: addToOrder(state, action),
        add_to_total_order_price: addToTotalOrderPrice(state.add_to_total_order_price, action)
    }
}
export default orderMain;