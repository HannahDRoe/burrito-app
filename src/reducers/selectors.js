// Selectors 
export const getEntreeTypes = (state) => {
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

export const getCurrentIngredientCategory = (state) =>{
    return state.order.current_entree.current_ingredient_category
}

const getIngredientCategoriesData = (state) => {
    return state.data.ingredient_categories
}
export const getIngredientCategoriesMaxLimit = (state) => {
    let limit;
    getIngredientCategoriesData(state).find((ingredientCat) =>{
        if(ingredientCat.id === getCurrentIngredientCategory(state) ){
            return limit = ingredientCat.max_limit
        }
    })
    return limit;
}

const getBaseIngredients = (state) => {
    return state.data.base_ingredients
}

export const getIngredientsAddedToOrder = (state) =>{
    return state.order.current_entree.ingredients_selected
}
export const getOrderTotal =(state) =>{
    return state.order.total
}
export const getDataStatus = (state) =>{
        if (Object.keys(state.data).length === 0) {
            return true
        } else{ return false }
}

export const getEntreeTypeName =(state) =>{
    return getEntreeTypes(state).map((type)=>{
        if(type.id === getEntreeId(state)){
            return type.name
        }
    })
}
export const getIngredientCategoriesForEntreeType = (state) => {
    return  getEntreeIngredientCategoryIds(state).map((categoryId) =>{
        return getNameAndId(getIngredientCategoriesData(state), categoryId);    
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

const getNameAndId = (state, itemId) =>{
    let name;
    let id;
    state.find((value) =>{
          if (value.id === itemId) {
            //   console.log(itemId)
           return name = value.name, id = value.id
        }
    });
    return {name, id}
}

export const getBaseIngredientItemsToShow = (state) =>{
    if ( getCurrentIngredientCategory(state)=== null) {
        return
    }else{
       return getBaseIngredientItems(state)
    }
}
 
export const getBaseIngredientItems = (state) =>{   
    return getBaseIngredientList(state).map((ingredient) =>{
        return getIngredientItem(getBaseIngredients(state), ingredient)
        })
}

export const getBaseIngredientList = (state) =>{
    let baseIngredients;
    getIngredientCategoriesData(state).find((category)=>{
        if(category.id === getCurrentIngredientCategory(state))
            return baseIngredients = category.base_ingredient_ids_included
    });
    return baseIngredients
}

const getIngredientItem = (state, itemId) =>{
    let item
    state.find((value) =>{
          if (value.id === itemId) {
           return item = value
        }
    });
    return item
}

export const getNumberOfIngredientsOfSameCategory = (state)=>{
    return getBaseIngredientList(state).filter((item) =>{
        return getIngredientsOfSameCatetory(state, item)
    })
}
const getIngredientsOfSameCatetory = (state, item) =>{
    let addedIngredients
     getIngredientsAddedToOrder(state).find((addedItems)=>{
        if (addedItems.id === item) {
            return addedIngredients = addedItems
        }
    })
    return addedIngredients
}

export const  getIfIngredientMaxLimitReached = (state) => {
    if ( getCurrentIngredientCategory(state) === null) {
        return;
    }else if (getNumberOfIngredientsOfSameCategory(state).length >= getIngredientCategoriesMaxLimit(state)) {
            return getIndexOfIngredientToReplace(state)
    }
    
}
const getIndexOfIngredientToReplace = (state) =>{
    const ingredientToReplace = getNumberOfIngredientsOfSameCategory(state)[0];
    return  getIngredientsAddedToOrder(state).findIndex(obj =>{ return obj.id === ingredientToReplace});
}

export const getAddExtra = (state) =>{
    if ( getCurrentIngredientCategory(state)=== null) {
        return
    }else{
        return getBaseIngredientItemsToShow(state).map((baseItems) =>{
            let itBeTrue;
            getIngredientsAddedToOrder(state).map((selectedItems) => {
                if(baseItems.id === selectedItems.id ){
                    return itBeTrue = true
                }
            })
            return itBeTrue
        })
    }
}

const getAdditionalPriceForExtra = (state, addExtra, baseIngredients) => {
    if(addExtra){
        return baseIngredients.additional_price_for_extra
    } else {return 0}
}

const getPricesToAdd =(state) => {
    let ingredientPrice =[];
    getBaseIngredients(state).map((baseIngredients) =>{
       return  getIngredientsAddedToOrder(state).map((items) =>{ 
            if(baseIngredients.id === items.id){
                return  ingredientPrice.push(baseIngredients.price),
                        ingredientPrice.push(getAdditionalPriceForExtra(state, items.addExtra, baseIngredients));
            }
        })
    })
    return ingredientPrice;
}

export const getEntreeTotal =(state) =>{
    return getPricesToAdd(state)
        .reduce((total, currentValue) => total + currentValue, 0)/100
    
}