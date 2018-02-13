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
                        name: action.itemName,
                        category: action.itemCategory
                    }
                ]
            }
        case 'REMOVE_INGREDIENT_MAX_LIMIT':
            const itemIndex = action.filteredItemId;
            console.log( ...state.ingredients_selected.slice(0, itemIndex))
            return{ ...state,
                ingredients_selected:[
                    ...state.ingredients_selected.slice(0, itemIndex),
                    ...state.ingredients_selected.slice(itemIndex +1)
                    
                ]
            }
        case 'CURRENT_INGREDIENT_CATEGORY':
            return{
               ...state,
              current_ingredient_category: action.categoryId
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
        current_order_status: currentOrderStatus(state.current_order_status, action),
        current_entree: entreeSelected(state.current_entree, action),
        total_order_price: addToTotalOrderPrice(state.add_to_total_order_price, action)
    }
}
export default orderMain;

// // Selectors 
// export const getEntreeTypes = (state) => {
//     console.log('get those entres!')
//     return state.data.entree_types;
//   }
// export const getOrderStatus = (state) => {
// return state.order.current_order_status;
// }

// export const getOrderId = (state) => {
//     return state.order.id;
//   }