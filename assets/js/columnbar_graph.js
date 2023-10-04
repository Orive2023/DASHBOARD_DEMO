var options = {
    series: [{
    name: 'Rice',
    data: [44, 55, 57, 56, 61, 58, 63]
    // data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Wheat',
    data: [76, 85, 101, 98, 87, 105, 91]
    // data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    // name: 'Free Cash Flow',
    // data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title:{
      text:'month sale ---->'
    }
  },
  yaxis: {
    title: {
      text: 'Quantity ----->'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "₹ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#columnBar"), options);
  chart.render();