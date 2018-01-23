export  function chooseEntree(entree){
    return{
        type: 'ENTREE_SELECTED',
        entree,
        
    }
}
export function addToOrder(itemId, itemName, itemPrice){
    return{
        type: 'ADD_TO_ORDER',
        itemId,
        itemName,
        itemPrice
    }
}

export function resetOrder(){
    return{
        type: 'RESET_ORDER'
    }
}