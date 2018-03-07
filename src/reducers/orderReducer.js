import entreeSelected from './currentEntreeReducer';

function currentOrderStatus(state, action) {
    switch (action.type) {
        case 'ENTREE_SELECTED':
            return  'entree-started'
        case 'RESET_CURRENT_ORDER':
        case 'START_NEW_ORDER':
            return 'entree-not-started'
        case 'FINISH_ENTREE':
            return 'entree-completed'
        case  'ADD_ANOTHER_ENTREE':
            return 'entree-not-started'
        case 'CHECKOUT':
            return 'order-checkout'
        case  'GO_BACK':
            return 'entree-not-started'
        case 'PLACE_ORDER':
            return 'order-placed'

        default:
            return state;
    }

}

function completedEntree(state , action){
    switch(action.type){
        case 'FINISH_ENTREE':
            return [...state, {
                    id: action.currentEntreeId,
                    entree_type: action.currentEntreeName,
                    ingredients: [...action.currentEntreeIngredients],
                    entreeTotal: action.currentEntreeTotal
                }]
        case 'REMOVE_COMPLETED_ENTREE':
            return [
                ...state.slice(0, action.entreeIndex),
                ...state.slice(action.entreeIndex +1)
            ]
        case 'START_NEW_ORDER':
            return []
        default:
            return state;    
    }
}

// function orderTotal(state, action){
//     switch (action.type) {    
//     case 'FINISH_ENTREE':
//         return state + action.currentEntreeTotal

//         default:
//             return state;
//     }
// }


function orderMain (state= {}, action){
    return {
        ...state,
        current_order_status: currentOrderStatus(state.current_order_status, action),
        current_entree: entreeSelected(state.current_entree, action),
        completed_entrees: completedEntree(state.completed_entrees, action),
        // total: orderTotal(state.total, action)
    }
}
export default orderMain;
