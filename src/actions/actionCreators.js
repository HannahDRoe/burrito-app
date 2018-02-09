import mock_api from '../utils/mock_api';

export  const selectEntree = (entree) => {
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}
export const addToOrder = (itemId, itemName, itemPrice, itemCategory) => {
    return{
        type: 'ADD_TO_ORDER',
        itemId,
        itemName,
        itemPrice,
        itemCategory
    }
}

export const resetOrder = () => {
    return{
        type: 'RESET_ORDER'
    }
}

export const replaceIngredientWhenMaxLimitIsReached = (filteredItemId) => {
    return {
        type: 'REPLACE_INGREDIENT',
        filteredItemId
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
  