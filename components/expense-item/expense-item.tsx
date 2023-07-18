import styles from './expense-item.module.css';
import ExpenseItemDate from './expense-item-date';
import ExpensesChart from './expense-chart';
import Card from '../layout/card';
import { useRef, useState } from 'react';
const ExpenseItem = ({expenses})=>{
    const [selectYear, setSelectYear] = useState<string>('');
    const optionRef = useRef(null);
    const selectYearHandler = (e)=>{
        e.preventDefault();
        const select = optionRef.current.value;
        // console.log(select);
        setSelectYear(select)
    }
    const filterData = expenses.filter(expense => {
        const year = expense.date.getFullYear().toString();
            return year === selectYear;     
});
    return <div className='container'>
        <ExpensesChart expenses={filterData}/>
        <form onSubmit={selectYearHandler}>
            <select className={styles.selectYear} ref={optionRef}>
                <option value="all">전체보기</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            <input type="submit" value="선택하기" className={styles.containerBtn}/>
        </form>
        {selectYear === 'all' || selectYear === '' ? expenses.map(expense => {
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
    }) : filterData.length === 0 ? <p className={styles.filterText}>등록 된 기록이 없습니다</p>: filterData.map(expense => {
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
    </div>
};
export default ExpenseItem;