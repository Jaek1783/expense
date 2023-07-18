//index.tsx
import React, { useRef, useState } from "react";
import { NextPage } from "next/types";
import ExpenseItem from "../components/expense-item/expense-item";
import NewExpenseItemForm from "../components/new-expense-item/new-expense-item";
interface Expense {
    id : string,
    title: string,
    amount:number,
    date: object
}
const HomePage:NextPage = ()=>{
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [amount, setAmount] = useState<number>();
    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const formTextHandler = (e)=>{
        e.preventDefault();
        const titleValue = titleRef.current.value;
        const dateValue = dateRef.current.value;
        const amountValue = amountRef.current.value;
        setTitle(titleValue);
        setDate(dateValue);
        setAmount(amountValue);
    };
    const expenses: Expense[] = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2023, 7, 14),
        },
        { id: 'e2', 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2023, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2022, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
    return <div>
        <h1>Hello World</h1>
        <NewExpenseItemForm 
            titleRef={titleRef} 
            dateRef={dateRef}
            amountRef={amountRef}
            formTextHandler={formTextHandler}
        />
        <ExpenseItem expenses={expenses}/>
    </div>
}

export default HomePage;