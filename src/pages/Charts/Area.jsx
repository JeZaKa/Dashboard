import React from 'react';
import { ChartComponent, SeriesCollectionDirective, Inject, DateTime, Legend, SplineAreaSeries, SeriesDirective } from '@syncfusion/ej2-react-charts';

import { areaPrimaryYAxis, areaPrimaryXAxis, areaCustomSeries } from '../../data/dummy';

import { useStateContext } from '../../contexts/contextProvider';
import { Header } from '../../components';
const Area = () => {

  const { currentMode } = useStateContext();
  return (
    <div>
      <Header category='Area' title='Inflaction Rate in Percentage' />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area;