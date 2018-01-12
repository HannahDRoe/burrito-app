export const ingredient_categories = [
    {
        id: 'big_tortilla_category',
        name: 'Tortilas',
        base_ingredients_included_ids: [
            'flour-tortilla',
            'whole-wheat-tortilla'
        ],
        required: true

    },
    {
        id: 'small_tortilla_category',
        name: 'Tortilas',
        base_ingredients_included_ids: [
            'small-flour-tortilla',
            'corn-tortilla'
        ],
        required: true
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
        required: true
    },
    {
        id: 'beans_category',
        name: 'Beans',
        base_ingredients_included_ids: [
            'black-beans',
            'pinto-beans',
            'no-beans'
        ],
        required: true
    },
    {
        id: 'rice_category',
        name: 'Rice',
        base_ingredients_included_ids: [
            'cilantro-rice',
            'brown-rice',
            'no-rice'
        ],
        required: true
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
        required: false
    },
]