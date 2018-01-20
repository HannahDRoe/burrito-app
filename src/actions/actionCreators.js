export  function chooseEntree(entree, categories){
    return{
        type: 'ENTREE_SELECTED',
        entree,
        categories
    }
}
export function addToOrder(index, itemId, itemName){
    return{
        type: 'ADD_TO_ORDER',
        index,
        itemId,
        itemName
    }
}

export function resetOrder(){
    return{
        type: 'RESET_ORDER'
    }
}