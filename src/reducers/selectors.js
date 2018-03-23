// Selectors 
export const getEntreeTypes = (state) => state.data.entree_types;

export const getOrderStatus = (state) => state.order.current_order_status;

export const getOrderId = (state) => state.order.id;

export const getEntreeId = (state) => state.order.current_entree.id;

export const getCurrentIngredientCategory = (state) => state.order.current_entree.current_ingredient_category;

const getIngredientCategoriesData = (state) => state.data.ingredient_categories;

const getBaseIngredients = (state) => state.data.base_ingredients;

export const getIngredientCategoriesMaxLimit = (state) => {
    let limit;
    getIngredientCategoriesData(state).find((ingredientCat) => ingredientCat.id === getCurrentIngredientCategory(state) 
        ? limit = ingredientCat.max_limit
        : null
    )
    return limit;
}
export const getIngredientsAddedToOrder = (state) => state.order.current_entree.ingredients_selected;

export const getCompletedEntrees = (state) => state.order.completed_entrees;

export const getDataStatus = (state) => Object.keys(state.data).length === 0;

export const getEntreeTypeName =(state) =>{
    let entreeName;
     getEntreeTypes(state).map((type)=> type.id === getEntreeId(state)
        ? entreeName = type.name
        : null
    );
    return entreeName
}
export const getIngredientCategoriesForEntreeType = (state) => {
    return  getEntreeIngredientCategoryIds(state).map((categoryId) =>{
        return getNameAndId(getIngredientCategoriesData(state), categoryId);    
    });
}
const getEntreeIngredientCategoryIds = (state) =>{
    let categories ;
        getEntreeTypes(state).find((type) => type.id === getEntreeId(state)
            ? categories = type.included_ingredient_category_ids
            : null
    );
    return categories;
}
const getNameAndId = (state, itemId) =>{
    let name;
    let id;
    state.find((value) => value.id === itemId
           ? (name = value.name, id = value.id)
           : null
        );
    return {name, id}
}
export const getBaseIngredientItemsToShow = (state) =>{
    if ( getCurrentIngredientCategory(state) === null) {
        return;
    }else{
       return getBaseIngredientItems(state);
    }
}
export const getBaseIngredientItems = (state) =>{   
    return getBaseIngredientList(state).map((ingredient) =>{
        return getIngredientItem(getBaseIngredients(state), ingredient)
        })
}
export const getBaseIngredientList = (state) =>{
    let baseIngredients;
    getIngredientCategoriesData(state).find((category)=> category.id === getCurrentIngredientCategory(state)
            ? baseIngredients = category.base_ingredient_ids_included
            : null
        );
    return baseIngredients;
}
const getIngredientItem = (state, itemId) =>{
    let item
    state.find((value) => value.id === itemId
        ? item = value
        : null
    );
    return item;
}
export const getNumberOfIngredientsOfSameCategory = (state)=>{
    return getBaseIngredientList(state).filter((item) =>{
        return getIngredientsOfSameCatetory(state, item);
    })
}
const getIngredientsOfSameCatetory = (state, item) =>{
    let addedIngredients
     getIngredientsAddedToOrder(state).find((addedItems)=> addedItems.id === item
            ? addedIngredients = addedItems
            : null  
    );
    return addedIngredients;
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
    if ( getCurrentIngredientCategory(state) === null) {
        return
    }else{
        return getBaseIngredientItemsToShow(state).map((baseItems) =>{
            let itBeTrue;
            getIngredientsAddedToOrder(state).map((selectedItems) => baseItems.id === selectedItems.id
                ? itBeTrue = true
                : itBeTrue = false
            )
            return itBeTrue;
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
       return  getIngredientsAddedToOrder(state).map((items) => baseIngredients.id === items.id
                ? ( ingredientPrice.push(baseIngredients.price),
                    ingredientPrice.push(getAdditionalPriceForExtra(state, items.addExtra, baseIngredients)))
                :null
        )  
    })
    return ingredientPrice;
}
export const getEntreeTotal =(state) =>{
    return getPricesToAdd(state)
            .reduce((total, currentValue) => total + currentValue, 0)/100
}
export const getOrderTotal =(state) => {
    if(getCompletedEntrees(state).length >0){
        return getCompletedEntrees(state)
            .map((entrees) => entrees.entreeTotal)
            .reduce((total, currentVal) => total + currentVal)
    }
}

