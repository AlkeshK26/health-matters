// Get the elements
const foodForm = document.getElementById('food-form');
const foodSelect = document.getElementById('food-select');
const foodList = document.getElementById('food-list');
const recipeContainer = document.getElementById('recipe-container');

// Define a data object to store the recipes
const recipes = {
    panner: [
        {
            name: 'Panner Delight',
            description: 'A crisp and refreshing apple snack with a touch of honey.',
            ingredients: ['1 apple', '1 tablespoon honey'],
            instructions: ['Wash the apple thoroughly.', 'Cut the apple into thin slices.', 'Drizzle honey over the apple slices.', 'Serve immediately.']
        },
        {
            name: 'Panner and Almonds',
            description: 'A sweet apple slice topped with crunchy almonds and honey.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons chopped almonds'],
            instructions: ['Wash the apple and cut it into slices.', 'Spread honey evenly on the apple slices.', 'Sprinkle chopped almonds on top.', 'Serve immediately.']
        },
        {
            name: 'Panner with Cinnamon',
            description: 'Apple slices with a hint of cinnamon and a drizzle of honey.',
            ingredients: ['1 apple', '1 tablespoon honey', '1/2 teaspoon ground cinnamon'],
            instructions: ['Wash the apple and slice it thinly.', 'Arrange the slices on a plate.', 'Sprinkle ground cinnamon over the apple slices.', 'Drizzle honey on top.', 'Serve immediately.']
        },
        {
            name: 'Panner and Peanut Butter',
            description: 'Apple slices served with creamy peanut butter for added flavor.',
            ingredients: ['1 apple', '1 tablespoon peanut butter', '1 teaspoon honey'],
            instructions: ['Wash the apple and cut it into slices.', 'Spread peanut butter on each apple slice.', 'Drizzle honey over the peanut butter.', 'Serve immediately.']
        },
        {
            name: 'Panner with Yogurt Dip',
            description: 'Crisp apple slices paired with a creamy yogurt dip.',
            ingredients: ['1 apple', '1/2 cup plain Greek yogurt', '1 tablespoon honey'],
            instructions: ['Wash the apple and slice it into wedges.', 'Mix Greek yogurt with honey in a small bowl.', 'Serve the apple slices with the yogurt dip on the side.']
        },
        {
            name: 'Panner with Cheese',
            description: 'Sweet apple slices served with a side of creamy cheese.',
            ingredients: ['1 apple', '2 tablespoons cream cheese', '1 tablespoon honey'],
            instructions: ['Wash and slice the apple.', 'Spread cream cheese on each apple slice.', 'Drizzle honey over the cream cheese.', 'Serve immediately.']
        },
        {
            name: 'Panner and Walnuts',
            description: 'Apple slices with a crunchy walnut topping and honey drizzle.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons chopped walnuts'],
            instructions: ['Wash and slice the apple into wedges.', 'Drizzle honey over the apple slices.', 'Sprinkle chopped walnuts on top.', 'Serve immediately.']
        },
        {
            name: 'Panner with Nut Butter',
            description: 'Apple slices paired with a rich nut butter spread and a touch of honey.',
            ingredients: ['1 apple', '1 tablespoon almond butter', '1 teaspoon honey'],
            instructions: ['Wash and slice the apple.', 'Spread almond butter on each apple slice.', 'Drizzle honey over the almond butter.', 'Serve immediately.']
        },
        {
            name: 'Panner with Chia Seeds',
            description: 'Apple slices with a sprinkle of chia seeds and a touch of honey.',
            ingredients: ['1 apple', '1 tablespoon honey', '1 tablespoon chia seeds'],
            instructions: ['Wash and slice the apple.', 'Drizzle honey over the apple slices.', 'Sprinkle chia seeds on top.', 'Serve immediately.']
        },
        {
            name: 'Panner with Raisins',
            description: 'Apple slices topped with sweet raisins and a honey drizzle.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons raisins'],
            instructions: ['Wash and cut the apple into slices.', 'Drizzle honey over the apple slices.', 'Top with raisins.', 'Serve immediately.']
        },
        {
            name: 'Panner with Granola',
            description: 'Apple slices topped with granola and a touch of honey.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons granola'],
            instructions: ['Wash the apple and slice it thinly.', 'Drizzle honey over the apple slices.', 'Sprinkle granola on top.', 'Serve immediately.']
        },
        {
            name: 'Panner with Coconut Flakes',
            description: 'Apple slices with a sprinkle of coconut flakes and a honey drizzle.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons coconut flakes'],
            instructions: ['Wash and slice the apple into wedges.', 'Drizzle honey over the apple slices.', 'Sprinkle coconut flakes on top.', 'Serve immediately.']
        },
        {
            name: 'Panner with Almonds and Honey',
            description: 'Apple slices topped with almonds and a generous drizzle of honey.',
            ingredients: ['1 apple', '1 tablespoon honey', '2 tablespoons sliced almonds'],
            instructions: ['Wash the apple and slice it into rounds.', 'Drizzle honey over the apple slices.', 'Top with sliced almonds.', 'Serve immediately.']
        },
        {
            name: 'Panner with Greek Yogurt and Honey',
            description: 'A refreshing apple snack with Greek yogurt and a touch of honey.',
            ingredients: ['1 apple', '1/2 cup Greek yogurt', '1 tablespoon honey'],
            instructions: ['Wash and slice the apple.', 'Serve with a side of Greek yogurt.', 'Drizzle honey over the apple slices or mix it into the yogurt.', 'Enjoy immediately.']
        },
        {
            name: 'Panner with Cinnamon and Nuts',
            description: 'Apple slices topped with a mix of cinnamon and chopped nuts for a flavorful treat.',
            ingredients: ['1 apple', '1 tablespoon honey', '1/2 teaspoon ground cinnamon', '2 tablespoons chopped nuts (like almonds or walnuts)'],
            instructions: ['Wash and slice the apple into wedges.', 'Drizzle honey over the apple slices.', 'Sprinkle ground cinnamon and chopped nuts on top.', 'Serve immediately.']
        }
    ],
    
        oats: [
            {
                name: 'Oats Delight',
                description: 'A sweet and creamy oat snack with banana and honey.',
                ingredients: ['1 cup oats', '1 banana', '1 tablespoon honey'],
                instructions: ['Mix oats and banana in a bowl.', 'Drizzle honey on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Nuts',
                description: 'A crunchy oat snack with chopped nuts and a hint of cinnamon.',
                ingredients: ['1 cup oats', '1/2 cup chopped nuts', '1/2 teaspoon ground cinnamon'],
                instructions: ['Mix oats and chopped nuts in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Dried Fruits',
                description: 'A sweet and chewy oat snack with dried fruits and a hint of vanilla.',
                ingredients: ['1 cup oats', '1/2 cup dried fruits', '1/2 teaspoon vanilla extract'],
                instructions: ['Mix oats and dried fruits in a bowl.', 'Add vanilla extract and mix well.', 'Serve immediately.']
            },
            {
                name: 'Oats with Peanut Butter',
                description: 'A creamy oat snack with peanut butter and banana.',
                ingredients: ['1 cup oats', '2 tablespoons peanut butter', '1 banana'],
                instructions: ['Mix oats and peanut butter in a bowl.', 'Add sliced banana on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Honey and Almonds',
                description: 'A sweet and crunchy oat snack with honey and sliced almonds.',
                ingredients: ['1 cup oats', '1 tablespoon honey', '1/2 cup sliced almonds'],
                instructions: ['Mix oats and honey in a bowl.', 'Top with sliced almonds.', 'Serve immediately.']
            },
            {
                name: 'Oats with Cinnamon and Raisins',
                description: 'A sweet and spicy oat snack with cinnamon and raisins.',
                ingredients: ['1 cup oats', '1/2 teaspoon ground cinnamon', '1/2 cup raisins'],
                instructions: ['Mix oats and cinnamon in a bowl.', 'Add raisins on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Banana and Nutmeg',
                description: 'A sweet and aromatic oat snack with banana and nutmeg.',
                ingredients: ['1 cup oats', '1 banana', '1/4 teaspoon ground nutmeg'],
                instructions: ['Mix oats and banana in a bowl.', 'Sprinkle nutmeg on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Apple and Cinnamon',
                description: 'A sweet and crunchy oat snack with apple and cinnamon.',
                ingredients: ['1 cup oats', '1 apple', '1/2 teaspoon ground cinnamon'],
                instructions: ['Mix oats and apple in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Carrot and Raisins',
                description: 'A sweet and healthy oat snack with carrot and raisins.',
                ingredients: ['1 cup oats', '1 carrot', '1/2 cup raisins'],
                instructions: ['Mix oats and carrot in a bowl.', 'Add raisins on top.', 'Serve immediately.']
            },
            {
                name: 'Oats with Pineapple and Coconut',
                description: 'A sweet and tropical oat snack with pineapple and coconut flakes.',
                ingredients: ['1 cup oats', '1 cup pineapple', '1/4 cup coconut flakes'],
                instructions: ['Mix oats and pineapple in a bowl.', 'Sprinkle coconut flakes on top.', 'Serve immediately.']
            }
        ],

    
            curd: [
                {
                    name: 'Curd Delight',
                    description: 'A refreshing curd snack with cucumber and mint.',
                    ingredients: ['1 cup curd', '1/2 cup cucumber', '1/4 cup mint leaves'],
                    instructions: ['Mix curd and cucumber in a bowl.', 'Add mint leaves on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Fruits',
                    description: 'A sweet and tangy curd snack with mixed fruits.',
                    ingredients: ['1 cup curd', '1 cup mixed fruits', '1 tablespoon honey'],
                    instructions: ['Mix curd and mixed fruits in a bowl.', 'Drizzle honey on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Nuts',
                    description: 'A crunchy curd snack with chopped nuts and a hint of cinnamon.',
                    ingredients: ['1 cup curd', '1/2 cup chopped nuts', '1/2 teaspoon ground cinnamon'],
                    instructions: ['Mix curd and chopped nuts in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Honey and Almonds',
                    description: 'A sweet and crunchy curd snack with honey and sliced almonds.',
                    ingredients: ['1 cup curd', '1 tablespoon honey', '1/2 cup sliced almonds'],
                    instructions: ['Mix curd and honey in a bowl.', 'Top with sliced almonds.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Cucumber and Cumin',
                    description: 'A refreshing curd snack with cucumber and cumin powder.',
                    ingredients: ['1 cup curd', '1/2 cup cucumber', '1/2 teaspoon cumin powder'],
                    instructions: ['Mix curd and cucumber in a bowl.', 'Sprinkle cumin powder on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Tomato and Basil',
                    description: 'A flavorful curd snack with tomato and basil.',
                    ingredients: ['1 cup curd', '1/2 cup tomato', '1/4 cup basil leaves'],
                    instructions: ['Mix curd and tomato in a bowl.', 'Add basil leaves on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Carrot and Ginger',
                    description: 'A healthy curd snack with carrot and ginger.',
                    ingredients: ['1 cup curd', '1/2 cup carrot', '1/2 teaspoon grated ginger'],
                    instructions: ['Mix curd and carrot in a bowl.', 'Sprinkle ginger on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Beetroot and Walnuts',
                    description: 'A sweet and earthy curd snack with beetroot and walnuts.',
                    ingredients: ['1 cup curd', '1/2 cup beetroot', '1/4 cup chopped walnuts'],
                    instructions: ['Mix curd and beetroot in a bowl.', 'Top with chopped walnuts.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Spinach and Garlic',
                    description: 'A healthy curd snack with spinach and garlic.',
                    ingredients: ['1 cup curd', '1/2 cup spinach', '1/2 teaspoon minced garlic'],
                    instructions: ['Mix curd and spinach in a bowl.', 'Sprinkle garlic on top.', 'Serve immediately.']
                },
                {
                    name: 'Curd with Pear and Cinnamon',
                    description: 'A sweet and spicy curd snack with pear and cinnamon.',
                    ingredients: ['1 cup curd', '1/2 cup pear', '1/2 teaspoon ground cinnamon'],
                    instructions: ['Mix curd and pear in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                }
            ],
        
            
                soya: [
                  {
                    name: 'Soya Chunks Delight',
                    description: 'A protein-rich soya chunks snack with cucumber and mint.',
                    ingredients: ['1 cup soya chunks', '1/2 cup cucumber', '1/4 cup mint leaves'],
                    instructions: ['Mix soya chunks and cucumber in a bowl.', 'Add mint leaves on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Fruits',
                    description: 'A sweet and tangy soya chunks snack with mixed fruits.',
                    ingredients: ['1 cup soya chunks', '1 cup mixed fruits', '1 tablespoon honey'],
                    instructions: ['Mix soya chunks and mixed fruits in a bowl.', 'Drizzle honey on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Nuts',
                    description: 'A crunchy soya chunks snack with chopped nuts and a hint of cinnamon.',
                    ingredients: ['1 cup soya chunks', '1/2 cup chopped nuts', '1/2 teaspoon ground cinnamon'],
                    instructions: ['Mix soya chunks and chopped nuts in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Honey and Almonds',
                    description: 'A sweet and crunchy soya chunks snack with honey and sliced almonds.',
                    ingredients: ['1 cup soya chunks', '1 tablespoon honey', '1/2 cup sliced almonds'],
                    instructions: ['Mix soya chunks and honey in a bowl.', 'Top with sliced almonds.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Cucumber and Cumin',
                    description: 'A refreshing soya chunks snack with cucumber and cumin powder.',
                    ingredients: ['1 cup soya chunks', '1/2 cup cucumber', '1/2 teaspoon cumin powder'],
                    instructions: ['Mix soya chunks and cucumber in a bowl.', 'Sprinkle cumin powder on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Tomato and Basil',
                    description: 'A flavorful soya chunks snack with tomato and basil.',
                    ingredients: ['1 cup soya chunks', '1/2 cup tomato', '1/4 cup basil leaves'],
                    instructions: ['Mix soya chunks and tomato in a bowl.', 'Add basil leaves on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Carrot and Ginger',
                    description: 'A healthy soya chunks snack with carrot and ginger.',
                    ingredients: ['1 cup soya chunks', '1/2 cup carrot', '1/2 teaspoon grated ginger'],
                    instructions: ['Mix soya chunks and carrot in a bowl.', 'Sprinkle ginger on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Beetroot and Walnuts',
                    description: 'A sweet and earthy soya chunks snack with beetroot and walnuts.',
                    ingredients: ['1 cup soya chunks', '1/2 cup beetroot', '1/4 cup chopped walnuts'],
                    instructions: ['Mix soya chunks and beetroot in a bowl.', 'Top with chopped walnuts.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Spinach and Garlic',
                    description: 'A healthy soya chunks snack with spinach and garlic.',
                    ingredients: ['1 cup soya chunks', '1/2 cup spinach', '1/2 teaspoon minced garlic'],
                    instructions: ['Mix soya chunks and spinach in a bowl.', 'Sprinkle garlic on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Pear and Cinnamon',
                    description: 'A sweet and spicy soya chunks snack with pear and cinnamon.',
                    ingredients: ['1 cup soya chunks', '1/2 cup pear', '1/2 teaspoon ground cinnamon'],
                    instructions: ['Mix soya chunks and pear in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                  },
                  {
                    name: 'Soya Chunks with Broccoli and Lemon',
                    description: 'A healthy soya chunks snack with broccoli and lemon juice.',
                    ingredients: ['1 cup soya chunks', '1/2 cup broccoli', '1 tablespoon lemon juice'],
                    instructions: ['Mix soya chunks and broccoli in a bowl.', 'Drizzle lemon juice on top.', 'Serve immediately.']
                  }
                ],

                 
                    eggs: [
                      {
                        name: 'Egg Delight',
                        description: 'A protein-rich egg snack with cucumber and mint.',
                        ingredients: ['2 eggs', '1/2 cup cucumber', '1/4 cup mint leaves'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and cucumber in a bowl.', 'Add mint leaves on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Fruits',
                        description: 'A sweet and tangy egg snack with mixed fruits.',
                        ingredients: ['2 eggs', '1 cup mixed fruits', '1 tablespoon honey'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and mixed fruits in a bowl.', 'Drizzle honey on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Nuts',
                        description: 'A crunchy egg snack with chopped nuts and a hint of cinnamon.',
                        ingredients: ['2 eggs', '1/2 cup chopped nuts', '1/2 teaspoon ground cinnamon'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and chopped nuts in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Honey and Almonds',
                        description: 'A sweet and crunchy egg snack with honey and sliced almonds.',
                        ingredients: ['2 eggs', '1 tablespoon honey', '1/2 cup sliced almonds'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and honey in a bowl.', 'Top with sliced almonds.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Cucumber and Cumin',
                        description: 'A refreshing egg snack with cucumber and cumin powder.',
                        ingredients: ['2 eggs', '1/2 cup cucumber', '1/2 teaspoon cumin powder'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and cucumber in a bowl.', 'Sprinkle cumin powder on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Tomato and Basil',
                        description: 'A flavorful egg snack with tomato and basil.',
                        ingredients: ['2 eggs', '1/2 cup tomato', '1/4 cup basil leaves'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and tomato in a bowl.', 'Add basil leaves on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Carrot and Ginger',
                        description: 'A healthy egg snack with carrot and ginger.',
                        ingredients: ['2 eggs', '1/2 cup carrot', '1/2 teaspoon grated ginger'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and carrot in a bowl.', 'Sprinkle ginger on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Beetroot and Walnuts',
                        description: 'A sweet and earthy egg snack with beetroot and walnuts.',
                        ingredients: ['2 eggs', '1/2 cup beetroot', '1/4 cup chopped walnuts'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and beetroot in a bowl.', 'Top with chopped walnuts.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Spinach and Garlic',
                        description: 'A healthy egg snack with spinach and garlic.',
                        ingredients: ['2 eggs', '1/2 cup spinach', '1/2 teaspoon minced garlic'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and spinach in a bowl.', 'Sprinkle garlic on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Pear and Cinnamon',
                        description: 'A sweet and spicy egg snack with pear and cinnamon.',
                        ingredients: ['2 eggs', '1/2 cup pear', '1/2 teaspoon ground cinnamon'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and pear in a bowl.', 'Sprinkle cinnamon on top.', 'Serve immediately.']
                      },
                      {
                        name: 'Eggs with Broccoli and Lemon',
                        description: 'A healthy egg snack with broccoli and lemon juice.',
                        ingredients: ['2 eggs', '1/2 cup broccoli', '1 tablespoon lemon juice'],
                        instructions: ['Boil the eggs and chop them up.', 'Mix eggs and broccoli in a bowl.', 'Drizzle lemon juice on top.', 'Serve immediately.']
                      },
                    ]
                      
};

// Add an event listener to the form to handle submission
foodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedFood = foodSelect.value;
    const recipesToDisplay = recipes[selectedFood];

    // Clear the current list and recipe container
    foodList.innerHTML = '';
    recipeContainer.innerHTML = '';

    if (Array.isArray(recipesToDisplay)) {
        // Display all recipes for the selected category
        recipesToDisplay.forEach(recipe => {
            // Update the food list with recipe names
            const foodListItem = document.createElement('li');
            foodListItem.textContent = recipe.name;
            foodListItem.addEventListener('click', () => {
                recipeContainer.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <p>${recipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                `;
            });
            foodList.appendChild(foodListItem);
        });
    } else {
        // Display single recipe for the selected food
        const recipe = recipesToDisplay;
        const foodListItem = document.createElement('li');
        foodListItem.textContent = recipe.name;
        foodList.appendChild(foodListItem);

        recipeContainer.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
    }
});
