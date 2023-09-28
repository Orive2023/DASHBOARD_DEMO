//  Chart For Stock 

 var options = {
     // series: [44, 55, 13, 43],
     series: [60, 30, 40, 10],
     chart: {
     width: 350,
     type: 'pie',
   },
   labels: ['Rice(A4)', 'Rice(A1)', 'Rice(A2)', 'Rice(A3)'],
   responsive: [{
     breakpoint: 480,
     options: {
       chart: {
         width: 200
       },
       legend: {
         // position: 'bottom'
         position: 'center'
       }
     }
   }]
   };

   var chart = new ApexCharts(document.querySelector("#piecharts"), options);
   chart.render();

