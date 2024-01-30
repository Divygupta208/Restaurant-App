import React from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form>
      <div className={classes["form-control"]}>
        <h3>Amount</h3>
        <input type="number" id="input-number" placeholder="1" />
      </div>
      <button className={classes["form-button"]}>
        <h3>+Add</h3>
      </button>
    </form>
  );
};

export default MealItemForm;
