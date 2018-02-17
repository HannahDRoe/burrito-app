export const ingredient_categories = [
    {
        id: 'big_tortilla_category',
        name: 'Tortilas',
        base_ingredient_ids_included: [
            'flour-tortilla',
            'whole-wheat-tortilla'
        ],
        min_required: 1,
        max_limit: 1

    },
    {
        id: 'small_tortilla_category',
        name: 'Taco Tortilas',
        base_ingredient_ids_included: [
            'small-flour-tortilla',
            'corn-tortilla'
        ],
        min_required: 1,
        max_limit: 1
    },
    {
        id: 'entree_protein_category',
        name: 'Fillings',
        base_ingredient_ids_included: [
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
        base_ingredient_ids_included: [
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
        base_ingredient_ids_included: [
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
        base_ingredient_ids_included: [
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


     