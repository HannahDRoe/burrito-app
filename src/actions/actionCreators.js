import mock_api from '../utils/mock_api';

export  const selectEntree = (entree) => {
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}

export const addToOrder = (itemId, itemName, itemPrice, ingredientIndex) => (dispatch, getState) => {  
    let findDuplicates = getState().order.current_entree.ingredients_selected.filter((items)=>{ if(items.id === itemId){return itemId}})
        if( findDuplicates.length < 1 ){
            dispatch({
                type: 'ADD_TO_ORDER',
                itemId,
                itemName,
                itemPrice     
            });
            if (Number.isInteger(ingredientIndex) ) {
                    return dispatch(removeSelectedIngredient(ingredientIndex))
            }
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
export const resetCurrentOrder = () => {
    return{
        type: 'RESET_CURRENT_ORDER'
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

export const finishOrder = (currentOrder) => {
    return {
        type: 'FINISH_ORDER',
        currentOrder
    }
}
export const finishCurrentEntree = (currentEntreeId, currentEntreeName, currentEntreeIngredients, currentEntreeTotal) => {
    return {
        type: 'FINISH_ENTREE',
        currentEntreeId,
        currentEntreeName,
        currentEntreeIngredients,
        currentEntreeTotal
    }
}
export const addAnotherEntree = () =>{
   return{ 
       type: 'ADD_ANOTHER_ENTREE'
    }
}
export const checkout = () =>{
    return{
        type: 'CHECKOUT'
    }
}
export const placeOrder = () =>{
    return{
        type: 'PLACE_ORDER'
    }
}
export const startNewOrder =() => {
    return{
        type: 'START_NEW_ORDER'
    }
}
export const removeCompletedEntree =(entreeIndex) =>{
    return {
        type: 'REMOVE_COMPLETED_ENTREE',
        entreeIndex
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
