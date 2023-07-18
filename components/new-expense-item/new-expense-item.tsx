import styles from './new-expense-item.module.css';
const NewExpenseItemForm = ({titleRef, dateRef, amountRef, formTextHandler})=>{
    return <form className={styles.newExpense} onSubmit={formTextHandler}>
        <div className={styles.newExpense__controls}>
            <div className={styles.newExpense__control}>
                <label>Title</label>
                <input type="text" ref={titleRef}/>
            </div>
            <div className={styles.newExpense__control}>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" ref={amountRef}/>
            </div>
            <div className={styles.newExpense__control}>
                <label>Date</label>
                <input type="date" min="2023.01.01" max='2023.12.31' ref={dateRef}/>
            </div>
        </div>
        <div className={styles.newExpense__actions}>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};
export default NewExpenseItemForm;