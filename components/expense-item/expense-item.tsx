import styles from './expense-item.module.css';
import ExpenseItemDate from './expense-item-date';
const ExpenseItem = ({expenses})=>{
    console.log(expenses);
    return <div>
        {expenses.map(expense => {
            const month = expense.date.toLocaleString('en-US', {month: 'long'});
            const day = expense.date.toLocaleString('en-US', {day : '2-digit'});
            const year = expense.date.getFullYear();
            return <div key={expense.id} className={styles.expenseItem}>
                        <ExpenseItemDate month={month} day={day} year={year}/>
                        <div className={styles.expenseItem__description}>
                            <h2>{expense.title}</h2>
                            <div className={styles.expenseItem__price}>{`$ ${expense.amount}`}</div>
                        </div>
                    </div>
        })}
    </div>
};
export default ExpenseItem;