import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartContext = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amt => {
        cartContext.addItem({
            id: props.id,
            name: props.mealName,
            amount: amt,
            price: props.price
        })
    };

    return <li className={classes.meal}> 
        <div>
            <h3>{props.mealName}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
};

export default MealItem;