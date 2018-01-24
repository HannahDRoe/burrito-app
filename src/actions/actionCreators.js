export  function chooseEntree(entree){
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}
export function addToOrder(itemId, itemName, itemPrice, itemCategory){
    return{
        type: 'ADD_TO_ORDER',
        itemId,
        itemName,
        itemPrice,
        itemCategory
    }
}

export function resetOrder(){
    return{
        type: 'RESET_ORDER'
    }
}