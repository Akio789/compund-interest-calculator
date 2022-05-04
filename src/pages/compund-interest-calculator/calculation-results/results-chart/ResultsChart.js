import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CompoundInterestCalculatorContext } from '../../../../contexts/CompoundInterestCalculatorContext';
import styles from './ResultsChart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultsChart = () => {
  const { calculateResults } = useContext(CompoundInterestCalculatorContext);

  const { labels, moneyByYear } = calculateResults();
  const data = {
    labels,
    datasets: [
      {
        label: 'Accumulated money',
        data: moneyByYear,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ],
  };
  return (
    <Bar
      className={styles.chart}
      data={data}
    />
  );
}

export default ResultsChart;