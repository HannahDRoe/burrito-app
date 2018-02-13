// Selectors 
export const getEntreeTypes = (state) => {
    console.log('get those entres!')
    return state.data.entree_types;
}
export const getOrderStatus = (state) => {
    return state.order.current_order_status;
}

export const getOrderId = (state) => {
    return state.order.id;
}

export const getEntreeId = (state) => {
   return state.order.current_entree.id
}
export const getIngredientCategoriesForEntreeType = (state) => {
    return  getEntreeIngredientCategoryIds(state).map((categoryId) =>{
               return findNameAndId(state.data.ingredient_categories, categoryId);    
            });
   
}

const getEntreeIngredientCategoryIds = (state) =>{
    let categories ;
        getEntreeTypes(state).find((type) =>{
            if (type.id === getEntreeId(state) ) {
                return categories = type.included_ingredient_category_ids
            }
    })
    return categories;
}
const findNameAndId = (state, categoryId) =>{
    let name;
    let id;
    state.find((value) =>{
        console.log(value.name)
          if (value.id === categoryId) {
           return name = value.name, id = value.id
        }
    });
    return {name, id}
}
 