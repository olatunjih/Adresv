import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphicalSummary = () => {
  // Data and Configuration for Investment Trends Chart
  const investmentTrendsOptions = {
    chart: {
      id: 'investment-trends-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    stroke: {
      curve: 'smooth',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const investmentTrendsSeries = [
    {
      name: 'Investment Value',
      data: [10000, 10500, 10200, 11000, 11500, 11300, 12000],
    },
  ];

  // Data and Configuration for ROI Performance Chart
  const roiPerformanceOptions = {
    chart: {
      id: 'roi-performance-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    yaxis: {
      title: {
        text: 'ROI (%)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " %";
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const roiPerformanceSeries = [
    {
      name: 'ROI',
      data: [2.5, 2.7, 2.3, 3.0, 3.2, 3.1, 3.5],
    },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Graphical Summary</h3>
      
      {/* Investment Trends Chart */}
      <div className="mb-8"> {/* Add some margin between charts */}
        <h4 className="text-lg font-medium text-gray-600 mb-2">Monthly Investment Trends</h4>
        <ReactApexChart 
          options={investmentTrendsOptions} 
          series={investmentTrendsSeries} 
          type="line" 
          height={350} 
        />
      </div>

      {/* ROI Performance Chart */}
      <div>
        <h4 className="text-lg font-medium text-gray-600 mb-2">Monthly ROI Performance (%)</h4>
        <ReactApexChart 
          options={roiPerformanceOptions} 
          series={roiPerformanceSeries} 
          type="bar" 
          height={350} 
        />
      </div>
    </section>
  );
};

export default GraphicalSummary;
