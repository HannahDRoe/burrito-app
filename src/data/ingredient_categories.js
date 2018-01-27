import React from 'react';
export const ingredient_categories = [
    {
        id: 'big_tortilla_category',
        name: 'Tortilas',
        base_ingredients_included_ids: [
            'flour-tortilla',
            'whole-wheat-tortilla'
        ],
        min_required: 1,
        max_limit: 1

    },
    {
        id: 'small_tortilla_category',
        name: 'Taco Tortilas',
        base_ingredients_included_ids: [
            'small-flour-tortilla',
            'corn-tortilla'
        ],
        min_required: 1,
        max_limit: 1
    },
    {
        id: 'entree-protein-category',
        name: 'Fillings',
        base_ingredients_included_ids: [
            'chicken',
            'steak',
            'carnitas',
            'barbacoa',
            'sofritas',
            'veggies'
        ],
        min_required: 1,
        max_limit: 1
    },
    {
        id: 'beans_category',
        name: 'Beans',
        base_ingredients_included_ids: [
            'black-beans',
            'pinto-beans',
            'no-beans'
        ],
        min_required: 1,
        max_limit: 1
    },
    {
        id: 'rice_category',
        name: 'Rice',
        base_ingredients_included_ids: [
            'cilantro-rice',
            'brown-rice',
            'no-rice'
        ],
        min_required: 1,
        max_limit: 1
    },
    {
        id: 'salsa_category',
        name: 'Salsa and Toppings',
        base_ingredients_included_ids: [
            'sour-cream',
            'cheese',
            'romaine-lettuce',
            'fajita-veggies',
            'guacamole',
            'queso',
            'fresh-tomato',
            'roasted-chili-corn',
            'tomatillo-green-chili',
            'tomatillo-red-chili'
        ],
        min_required: 0,
        max_limit: 7
    }
]


     