import mock_api from '../utils/mock_api';

export  const selectEntree = (entree) => {
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}

export const addToOrder = (itemId, itemName, itemPrice, ingredientIndex) => (dispatch) => {  
    console.log(ingredientIndex);
    dispatch({
        type: 'ADD_TO_ORDER',
        itemId,
        itemName,
        itemPrice     
    });
    if (Number.isInteger(ingredientIndex) ) {
            return dispatch(removeSelectedIngredient(ingredientIndex))
    }
};

export  const addExtra = (itemId) => {
    return {
        type: 'ADD_EXTRA',
        itemId
    }
}
export const removeExtra = (itemIndex) => {
    return {
        type: 'REMOVE_EXTRA',
        itemIndex
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
