import mock_api from '../utils/mock_api';

export  const selectEntree = (entree) => {
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}
export const addToOrder = (itemId, itemName, itemPrice) => {
    return{
        type: 'ADD_TO_ORDER',
        itemId,
        itemName,
        itemPrice
    }
}

export const resetOrder = () => {
    return{
        type: 'RESET_ORDER'
    }
}
export const removeSelectedIngredient = (ingredientId) =>{
    return{
        type: 'REMOVE_SELECTED_INGREDIENT',
        ingredientId
    }
}
export const selectIngredientCategory = (categoryId) =>{
    return{
        type: 'INGREDIENT_CATEGORY_UPDATED',
        categoryId
    }
}
// export const replaceIngredientWhenMaxLimitIsReached = (filteredItemId) => {
//     return {
//         type: 'REMOVE_SELECTED_INGREDIENT',
//         filteredItemId
//     }
// }
 
//bringing in the data
export const receiveData = (allData) =>{
    return{
        type: 'RECEIVE_DATA',
        allData
    } 
}
  
export const getAllData = () => dispatch => {
    mock_api.getData(allData => {
        dispatch(receiveData(allData))
    })
}

