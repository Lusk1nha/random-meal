import '../styles/meal-content.css';

export function MealContent(props) {
  const {recipe} = props

  return (
    <article className="recipe">
      <aside>
        <img src={recipe.image} alt={`${recipe.name}`}/>
      </aside>

      <h1 className="name">{recipe.name || 'Sem nome'}</h1>

      {/* <section className="instructions-container">
        <h5>Instruções</h5>

        <p className="instructions-text">
          {recipe.instructions}
        </p>
      </section> */}
    </article>
  );
}