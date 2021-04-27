export const saveTokens = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

export const saveUser = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const saveFavoriteRecipe = (recipe) => {
  const existingRecipes = localStorage.getItem('favoriteRecipes') || '[]';
  const parsedRecipes = JSON.parse(existingRecipes);
  localStorage.setItem('favoriteRecipes', JSON.stringify([...parsedRecipes, recipe]));
};

export const saveDoneRecipe = (recipe) => {
  const existingRecipes = localStorage.getItem('doneRecipes') || '[]';
  const parsedRecipes = JSON.parse(existingRecipes);
  localStorage.setItem('doneRecipes', JSON.stringify([...parsedRecipes, recipe]));
};
