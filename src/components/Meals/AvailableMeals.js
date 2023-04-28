import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const EXAMPLE_DATA = [
  {
    id: "m1",
    name: "Tofu Stew (Soon Du Bu)",
    description:
      "A traditional Korean soft tofu soup perfect for those cold days, or a cozy night-in. Served with an egg poached in the soup and soft fluffy sticky rice.",
    price: 14.99,
  },
  {
    id: "m2",
    name: "Mixed Rice with Vegetables (Bibimbap)",
    description:
      "Korean rice bowl served with assorted stir fried vegetables on a bed of warm fluffy rice and a fried egg on top.",
    price: 15.99,
  },
  {
    id: "m3",
    name: "Korean Rice Cakes (Tteok-bboki)",
    description:
      "Korean rice cakes served in a sweet spicy sauce with fish cakes and garnished with green onion",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Spicy Korean Beef (Bulgogi)",
    description:
      "Sliced beef sirloin marinated in a traditonal sweet and spicy sauce with vegetables. Served with steamed rice and side dishes",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = EXAMPLE_DATA.map((meal) => <MealItem key={meal.id} id={meal.id} mealName={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
        <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
