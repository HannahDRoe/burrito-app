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
    case 'RESET_CURRENT_ORDER':
    case 'ADD_ANOTHER_ENTREE' :
    case 'FINISH_ENTREE':
            return {    id: null,
                        current_ingredient_category: null,
                        ingredients_selected:[]
                    };
        default:
           return state;
    }
  
}
export default entreeSelected;
