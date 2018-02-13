export const entree_types = [
    {
        id:'burrito',
        name: 'Burrito',
        description: 'Flour or Whole Wheat tortillas with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids: [
            'entree_protein_category',
            'big_tortilla_category',
            'rice_category',
            'beans_category',
            'salsa_category'
        ]
    },
    {
        id:'burrito-bowl',
        name: 'Burrito Bowl',
        description: 'A burrito in a bowl minus the tortilla with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids:[
            'entree_protein_category',
            'rice_category',
            'beans_category',
            'salsa_category'
        ]
    },
    {
        id:'tacos',
        name: 'Tacos',
        description: 'choose between soft flour or corn tortillas accompanied with your choice of meat or sofritas, rice, beans, salsa',
        img_src: '...',
        included_ingredient_category_ids:[
            'entree_protein_category',
            'small_tortilla_category',
            'beans_category',
            'salsa_category'
        ]

    },
    {
        id:'salad',
        name: 'Salad',
        description: 'Lovely fresh chopped romaine lettuce with your choice of meat or sofritas, beans, sour cream, or cheese, along with a fantastic tomatillo ranch dressing ',
        img_src: '...',
        included_ingredient_category_ids:[
            'entree_protein_category',
            'rice_category',
            'beans_category',
            'salsa_category'
        ]

    }
]
