import Chart from "../Chart/chart";

interface chartDataPointsType {
    label : string,
    value : number
}
const ExpensesChart = ({expenses})=>{
    const chartDataPoints : chartDataPointsType[] = [
        {label : '1월', value : 0},
        {label : '2월', value : 0},
        {label : '3월', value : 0},
        {label : '4월', value : 0},
        {label : '5월', value : 0},
        {label : '6월', value : 0},
        {label : '7월', value : 0},
        {label : '8월', value : 0},
        {label : '9월', value : 0},
        {label : '10월', value : 0},
        {label : '11월', value : 0},
        {label : '12월', value : 0},
    ];
// console.log(expenses);
for(const expense of expenses){
    const expenseMonth = expense.date.getMonth();
    // console.log(expenseMonth);
    chartDataPoints[expenseMonth].value += expense.amount;
// console.log(chartDataPoints[expenseMonth].value += expense.amount)
}
    return <Chart dataPoints={chartDataPoints}/>
};
export default ExpensesChart;