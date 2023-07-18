import styles from './expense-item.module.css';
import ExpenseItemDate from './expense-item-date';
import Card from '../layout/card';
import { useState } from 'react';
const ExpenseItem = ({expenses})=>{
    const [selectMonth, setSelectMonth] = useState('');
    const selectMonthHandler = (e)=>{
        e.preventDefault();
        const select = e.target.value;
        setSelectMonth(select)
    }
    return <div className='container'>
        <form onChange={selectMonthHandler}>
            <select className={styles.selectMonth}>
                <option value="01">1월</option>
                <option value="02">2월</option>
                <option value="03">3월</option>
                <option value="04">4월</option>
                <option value="05">5월</option>
                <option value="06">6월</option>
                <option value="07">7월</option>
                <option value="08">8월</option>
                <option value="09">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
            </select>
        </form>
        {selectMonth ? expenses.filter(expense => {
                const month = expense.date.toLocaleString('en-US', {month: '2-digit'});
                return month === selectMonth;
        }).map(expense => {

            const month = expense.date.toLocaleString('en-US', {month: '2-digit'});
            const day = expense.date.toLocaleString('en-US', {day : '2-digit'});
            const year = expense.date.getFullYear();
            return <Card key={expense.id} className={styles.expenseItem}>
                        <ExpenseItemDate month={month} day={day} year={year}/>
                        <div className={styles.expenseItem__description}>
                            <h2>{expense.title}</h2>
                            <div className={styles.expenseItem__price}>{`$ ${expense.amount}`}</div>
                        </div>
                    </Card>
        }):expenses.map(expense => {
        const month = expense.date.toLocaleString('en-US', {month: '2-digit'});
        const day = expense.date.toLocaleString('en-US', {day : '2-digit'});
        const year = expense.date.getFullYear();
        return <Card key={expense.id} className={styles.expenseItem}>
                    <ExpenseItemDate month={month} day={day} year={year}/>
                    <div className={styles.expenseItem__description}>
                        <h2>{expense.title}</h2>
                        <div className={styles.expenseItem__price}>{`$ ${expense.amount}`}</div>
                    </div>
                </Card>
    })}
        {}
    </div>
};
export default ExpenseItem;