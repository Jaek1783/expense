import ChartBar from "./chart-bar";
import styles from './cart.module.css';
const Chart = ({dataPoints})=>{
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    // console.log(totalMaximum);
    return <div className={styles.chart}>
        {dataPoints.map((dataPoint,index) => {
            // console.log(dataPoint.value, totalMaximum, dataPoint.label)
            return <ChartBar 
            key={index} 
            value = {dataPoint.value} 
            maxValue = {totalMaximum} 
            label={dataPoint.label}
        />
        })}
    </div>
};
export default Chart;