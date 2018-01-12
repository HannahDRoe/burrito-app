const order = {
    id: id,
    time_started: time,
    selected_entree: [
        {
            entree_id: id,
            selected_ingredients: [
                {
                category_id:category,
                ingredent_id: 'ere',
                add_extra: true                    
                }
            ],

        }

    ],
    selected_chips: {
        quanity: number,
        selected_chip_salsa: id
    },
    order_notes: null,
    time_submitted: time,
    total_price: price
}

const base_ingredients = [
    {
        id: 'chicken',
        name: 'Chicken',
        description: 'Marinated overnight and gilled fresh throughout the day',
        img_src: '...',
        can_add_extra: true,
        price: 675,
        additional_price_for_extra: 250
    },
    {
        id: 'steak',
        name: 'Steak',
        description: 'Marinated overnight in our sipcy chipotle sauce and gilled to a perfect medium rare',
        img_src: '...',
        can_add_extra: true,
        price: 775,
        additional_price_for_extra: 350
    },
    {
        id: 'carnitas',
        name: 'Carnitas',
        description: 'Pork that is braised for hours in our special spice blend and shredded',
        img_src: '...',
        can_add_extra: true,
        price: 700,
        additional_price_for_extra: 250
    },
    {
        id: 'barbacoa',
        name: 'Barbacoa',
        description: 'Beef that is braised for hours in our special spice blend and shredded',
        img_src: '...',
        can_add_extra: true,
        price: 750,
        additional_price_for_extra: 325
    },
    {
        id: 'sofritas',
        name: 'Sofritas',
        description: 'Organic tofu that is braised for hours in our special spice blend and shredded',
        img_src: '...',
        can_add_extra: true,
        price: 650,
        additional_price_for_extra: 250
    },
    {
        id: 'veggies',
        name: 'Veggies',
        description: 'Our guacamole and fajita veggies ',
        img_src: '...',
        can_add_extra: true,
        price: 650,
        additional_price_for_extra: 250
    },
    {
        id: 'flour-tortilla',
        name: 'Flour Tortilla',
        description: 'a fluffy disk of goodness',
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'whole-wheat-tortilla',
        name: 'Whole Wheat Tortilla',
        description: 'a realtively healthier tortilla option but still good',
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'small-flour-tortilla',
        name: ' Soft Flour Tortilla' ,
        description: 'small and great for tacos',
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },    
    {
        id: 'corn-tortilla',
        name: 'Corn Tortilla' ,
        description: 'small tortillas for great authentic tacos',
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },    
    {
        id: 'black-beans',
        name: 'Black Beans',
        description: 'delicious beans',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'pinto-beans',
        name: 'Pinto Beans',
        description: 'pinto beand also a great option',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'no-beans',
        name: 'No Beans Please',
        description: null,
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'cilantro-rice',
        name: 'Cilantro Rice',
        description: 'Rice! Classic!',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'brown-rice',
        name: 'Brown Rice',
        description: 'Rice! Classic!',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'no-rice',
        name: 'No Rice Please',
        description: null,
        img_src: '...',
        can_add_extra: false,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'sour-cream',
        name: 'Sour Cream',
        description: 'a nice little somethin',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'cheese',
        name: 'Cheese',
        description: 'Cheeeese!',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'fajita-veggies',
        name: 'Fajita Veggies',
        description: 'Veggies rock',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'romaine-lettuce',
        name: 'Romaine Lettuce',
        description: 'Crisp Romaine Lettuce',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
// ]
// const salsa_sauces =[
    {
        id: 'guacamole',
        name: 'Guacamole',
        description: 'Guacamole',
        img_src: '...',
        can_add_extra: true,
        price: 200,
        additional_price_for_extra: 0
    },
    {
        id: 'queso',
        name: 'Queso',
        description: 'Lovely golden melty cheese. Is it obvious I have no copy editor?',
        img_src: '...',
        can_add_extra: true,
        price: 150,
        additional_price_for_extra: 0
    },
    {
        id: 'fresh-tomato',
        name: 'Fresh Tomato Salsa',
        description: 'Mild',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'roasted-chili-corn',
        name: 'Roasted Chili Corn Salsa',
        description: 'Medium',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'tomatillo-green-chili',
        name: 'Tomatillo-Green Chili Salsa',
        description: 'Medium Hot',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    },
    {
        id: 'tomatillo-red-chili',
        name: 'Tomatillo-Red Chili Salsa',
        description: 'Hot',
        img_src: '...',
        can_add_extra: true,
        price: 0,
        additional_price_for_extra: 0
    }

]

const entree_types = [
    {
        id:'burrito',
        name: 'Burrito',
        description: 'Flour or Whole Wheat tortillas with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids: [
            'big_tortilla_category',
            'beans_category',
            'rice_category',
            'salsa_category'
        ]
    },
    {
        id:'burrito-bowl',
        name: 'Burrito Bowl',
        description: 'A burrito in a bowl minus the tortilla with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids:[]
    },
    {
        id:'tacos',
        name: 'Tacos',
        description: 'choose between soft flour or corn tortillas accompanied with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids:[
            'small_tortilla_category',
            'beans_category'
        ]

    },
    {
        id:'salad',
        name: 'Salad',
        description: 'Lovely fresh chopped romaine lettuce with your choice of meat or sofritas, beans, sour cream, or cheese, along with a fantastic tomatillo ranch dressing ',
        img_src: '...',
        included_ingredient_category_ids:[]

    }
]


const ingredient_categories = [
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

const add_on_chips = {
    id:'add_chips_to_order',
    name: 'Chips',
    salsa_sauces_included_ids:[
        'guacamole',
        'queso',
        'fresh-tomato',
        'roasted-chili-corn',
        'tomatillo-green-chili',
        'tomatillo-red-chili'
    ]
}