import React, {useEffect} from 'react';
import ReactApexChart from 'react-apexcharts'
import HelpersGeneral  from '../../Helpers/GeneralHelpers';

const WheaterChart = (props) => {
  console.log("props", props);

  const wheaterData = props?.props;
  const cityName = wheaterData?.city_name;

   var highTemp = wheaterData.data.map(function(x){
     return x.high_temp;
   });

   var lowTemp = wheaterData.data.map(function(x){
    return x.low_temp;
  }); 
  
  var chartDate = wheaterData.data.map(function(x){
    return  HelpersGeneral.getChartDate(x.datetime)
  }); 

    var options = {
        series: [
        {
          name: "High",
          data: highTemp.slice(0, 5)
        },
        {
          name: "Low",
          data: lowTemp.slice(0,5)
        }
      ],
        chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Temperature for' + ' ' + cityName,
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
       categories: chartDate.slice(0,5),
        title: {
          text: 'Date'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5.00,
        max: 40.00
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
  };

return(
    <div id="chart" style={{marginLeft: '50px', marginTop: '50px'}}>
      <ReactApexChart 
      options={options} 
      series={options.series} 
      type="line" 
      height={350} 
      width={450} />
   </div>
  )
}

export default WheaterChart;