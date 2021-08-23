export function MealGenerator(props) {
  const {setRecipe} = props

  const getRandomRecipe = async () => {
    const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const response = await fetch(RANDOM_MEAL_URL)
    const result = await response.json()

    const recipe = result.meals[0]
    
    return setRecipe({
      name: recipe.strMeal,
      area: recipe.strArea,
      category: recipe.strCategory,
      instructions: recipe.strInstructions,
      image: recipe.strMealThumb
    })
  }

  return (
    <button onClick={getRandomRecipe} className="btn-generator" type="button" aria-label="Botão para gerar uma nova comida" aria-pressed="true">
      Gerar comida
    </button>
  );
}