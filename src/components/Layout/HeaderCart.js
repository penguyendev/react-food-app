import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css'
import CartContext from "../../store/cart-context";

const HeaderCart = props => {
    const cartContext = useContext(CartContext);
    const { items } = cartContext;
    const [btnAnimation, setBtnAnimation] = useState(false);
    const cartAmt = items.reduce((current, item) => {
        return current + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${btnAnimation ? classes.bump: ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnimation(true);
        const timer = setTimeout(() => {
            setBtnAnimation(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartAmt}</span>
    </button>
}

export default HeaderCart;