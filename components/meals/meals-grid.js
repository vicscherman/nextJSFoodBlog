import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  if (!meals || meals.length === 0) {
    return <p>No meals available.</p>;
  }

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
