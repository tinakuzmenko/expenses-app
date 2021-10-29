import "./ExpenseItem.css";

const ExpenseItem = () => {
    return (
      <div className="expense-item">
          <div>
              October 28th, 2021
          </div>
          <div className="expense-item__description">
              <h2>Shopping on bol.com</h2>
              <div className="expense-item__price">€28</div>
          </div>
      </div>
    )
}

export default ExpenseItem;
