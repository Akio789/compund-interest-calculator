import React, { useContext } from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { CompoundInterestCalculatorContext } from '../../../../contexts/CompoundInterestCalculatorContext';
import styles from './ResultsSummary.module.css';

const ResultsSummary = () => {
  const { calculateResultsSummary } = useContext(CompoundInterestCalculatorContext);

  const summaryCards = Object.entries(calculateResultsSummary())
    .map(([name, val]) => {
      return (
        <Card key={name} className={styles.card} elevation={3}>
          <CardContent>
            <Typography variant="h5" className={styles['card-name']}>
              {name}
            </Typography>
            <Typography variant="h6" className={styles['card-val']}>
              $ {val.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </Typography>
          </CardContent>
        </Card>
      );
    })

  return (
    <div className={styles.container}>
      {summaryCards}
    </div>
  );
}

export default ResultsSummary;