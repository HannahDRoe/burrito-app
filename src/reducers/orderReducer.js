function entreeSelected (state, action) {
    switch (action.type) {
        case 'ENTREE_SELECTED':
            return{
                ...state,
                id: action.entree
            }
        case 'ADD_TO_ORDER':
            return{...state,
                ingredients_selected:[...state.ingredients_selected, 
                    {
                        id: action.itemId,
                        name: action.itemName
                    }
                ]
            }
        case 'INGREDIENT_CATEGORY_UPDATED':
            return{
               ...state,
              current_ingredient_category: action.categoryId
            }
        case 'REMOVE_SELECTED_INGREDIENT':
            const ingredientIndex = action.ingredientId;
            return{ ...state,
                ingredients_selected:[
                    ...state.ingredients_selected.slice(0, ingredientIndex),
                    ...state.ingredients_selected.slice(ingredientIndex +1)
                    
                ]
            }
    
        case 'RESET_ORDER':
            return {    id: null,
                        current_ingredient_category: null,
                        ingredients_selected:[]
                    };
        default:
           return state;
    }
  
}

function currentOrderStatus(state, action) {
    switch (action.type) {
        case 'ENTREE_SELECTED':
            return  'order-started'

        case 'RESET_ORDER':
            return 'order-not-started'

        default:
            return state;
    }

}
function removeIngredient(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// function addToTotalOrderPrice(state=0, action){
//     switch (action.type) {
//         case 'ADD_TO_ORDER':
//         console.log('added to total order pricE! ' + action.itemPrice)
//        return  state + action.itemPrice
        
        
        
//         case 'RESET_ORDER':
//             return state={total: 0};
//         default:
//             return state;
//     }
// }


function orderMain (state= {}, action){
    return {
        ...state,
        current_order_status: currentOrderStatus(state.current_order_status, action),
        current_entree: entreeSelected(state.current_entree, action)
    }
}
export default orderMain;
