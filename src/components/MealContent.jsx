import '../styles/meal-content.css';

import { RecipeVideo } from './RecipeVideo';

export function MealContent(props) {
  const {recipe} = props

  return (
    <article className="recipe">
      <aside>
        <img src={recipe.image} alt={`${recipe.name}`} onClick={() => window.open(recipe.link)}/>
      </aside>

      <section className="recipe-infos">
        <h2 className="name">{recipe.name || 'Sem nome'}</h2>
        <h3 className="area">{recipe.area || 'Desconhecida'}</h3>

        { recipe.link ? (
          <a className="recipe-site" href={recipe.link} target="_blank">
            See in the official site
          </a>
        ) : ''}
      </section>

      <section className="instructions-container">
        <h4>Instruções</h4>

        <article className="instructions-text">
          {recipe.instructions.split('\r\n').map((text, index) => {
            return <p key={index}>{text}</p>
          })}
        </article>
      </section>
      
      { recipe.youtube !== undefined ? (
        <section className="youtube-container">
          <h5>Youtube video</h5>
          <RecipeVideo videoURL={recipe.youtube} foodTitle={recipe.name} />
        </section>
      ) : ''}
    </article>
  );
}