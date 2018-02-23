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
                        addExtra: false
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
        case 'ADD_EXTRA':
            const itemIndex = state.ingredients_selected.findIndex(obj =>{ return obj.id === action.itemId});
            return{
                ...state,
                    ingredients_selected:[
                        ...state.ingredients_selected.slice(0, itemIndex),
                        {...state.ingredients_selected[itemIndex],  addExtra: true},
                        ...state.ingredients_selected.slice(itemIndex +1)
                        
                    ]
            }
        case 'REMOVE_EXTRA':
            return{
                ...state,
                    ingredients_selected:[
                        ...state.ingredients_selected.slice(0, action.itemIndex),
                        {...state.ingredients_selected[action.itemIndex],  addExtra: false},
                        ...state.ingredients_selected.slice(action.itemIndex +1)
                        
                    ]
            }
    case 'RESET_ORDER', 
            'ADD_ANOTHER_ENTREE' :
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
            return  'entree-started'
        case 'RESET_ORDER':
            return 'entree-not-started'
        case 'FINISH_ENTREE':
            return 'entree-completed'
        case  'ADD_ANOTHER_ENTREE':
            return 'entree-not-started'
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

function completedEntree(state , action){
    switch(action.type){
        case 'FINISH_ENTREE':
            return [...state, {
                    id: action.currentEntreeId,
                    ingredients: [...action.currentEntreeIngredients]
                }]
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
        current_entree: entreeSelected(state.current_entree, action),
        completed_entrees: completedEntree(state.completed_entrees, action)
    }
}
export default orderMain;
