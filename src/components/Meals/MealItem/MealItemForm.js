import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amtInputRef = useRef();
    const submitHandler = e => {
        e.preventDefault();
        const enteredAmt = amtInputRef.current.value;
        const enteredAmtNum = +enteredAmt;
        if (enteredAmt.trim().length === 0 || enteredAmtNum < 1 || enteredAmtNum > 10) {
            setIsAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmtNum);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
      ref={amtInputRef}
      label="Amount" 
      input={{ 
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-10).</p>}
    </form>
  );
};

export default MealItemForm;
