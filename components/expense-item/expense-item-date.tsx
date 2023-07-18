import styles from './expense-item-date.module.css';
const ExpenseItemDate = ({month, year, day})=>{
    return <ul className={styles.expenseDate}>
        <li className={styles.expenseDate__year}>{year}</li>
        <li className={styles.expenseDate__month}>{month}월</li>
        <li className={styles.expenseDate__day}>{day}</li>
</ul>
};
export default ExpenseItemDate;