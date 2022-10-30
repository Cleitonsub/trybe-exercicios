const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const drinks = require('./data/drinks');
const recipes = require('./data/recipes');


app.use(bodyParser.json());
app.get('/recipes', listRecipes);
app.post('/recipes', createRecipe);
app.get('/drinks', listDrinks);
app.get('/recipes/search', searchRecipes);
app.get('/recipes/:id', getRecipe);
app.get('/drinks/:id', getDrink);

app.listen(3000, () => {
  console.log('Aplicação na porta 3000');
});

function listDrinks(_req, res) {
  const sortDrinks = drinks.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  });
  res.status(200).json(sortDrinks);
};

function listRecipes(_req, res) {
  const sortRecipes = recipes.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  })
  res.status(200).json(sortRecipes);
};

function createRecipe() {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully'});
};

function getDrink(req, res) {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});
  res.status(200).json(drink);
};

function getRecipe(req, res) {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'})
  res.status(200).json(recipe);
};

function searchRecipes(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) => recipe.name.includes(name) && recipe.price < parseInt(maxPrice) && recipe.price > parseInt(minPrice));
  res.status(200).json(filteredRecipes);
};
