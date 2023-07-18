import styles from './cart.module.css';
const ChartBar = ({value, maxValue, label})=>{
    // console.log(value, maxValue, label)
    let barFillHeight = '0%';
    if(maxValue > 0 ){
        barFillHeight = Math.round((value / maxValue)*100)+'%';
    }
    // console.log(barFillHeight);
    return <div className={styles.chartBar}>
        <div className={styles.chartBar__inner}>
            <div className={styles.chartBar__fill} 
            style={{height:barFillHeight}}></div>
        </div>
        <div className={styles.chartBar__label}>{label}</div>
    </div>
};
export default ChartBar;