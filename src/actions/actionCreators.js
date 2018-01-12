export  function chooseEntree(entree, categories){
    return{
        type: 'ENTREE_SELECTED',
        entree,
        categories
    }
}
export function addToOrder(foodItem){
    return{
        type: 'ADD_TO_ORDER',
        foodItem
    }
}
