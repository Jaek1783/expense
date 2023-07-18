//index.tsx
import React from "react";
import { NextPage } from "next/types";
import ExpenseItem from "../components/expense-item/expense-item";
interface Expense {
    id : string,
    title: string,
    amount:number,
    date: string
}
const HomePage:NextPage<Expense> = ()=>{
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
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
        <ExpenseItem expenses={expenses}/>
    </div>
}

export default HomePage;