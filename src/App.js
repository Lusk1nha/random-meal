import { useState } from 'react';
import { MealContent } from './components/MealContent';

import { MealGenerator } from './components/MealGenerator';

import './styles/main.css';

function App() {
  const [recipe, setRecipe] = useState()

  return (
    <main id="home">
      <header>
        <h1 className="title">Gerador de comida</h1>
      </header>
      
      <section className="new-meal-container">
        <p>Clique aqui para gerar uma nova comida</p>
        <MealGenerator setRecipe={setRecipe}/>
      </section>

      <section className="meal-container">
        {!recipe ? <h4 className="empty-recipe">Nem uma comida encontrada ainda</h4> : (
          <MealContent recipe={recipe} />
        )}
      </section>
    </main>
  );
}

export default App;
