import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Korean Food, Delivered To You</h2>
      <p>
        Choose your favorite Korean dish from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;