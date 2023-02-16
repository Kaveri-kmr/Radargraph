export const planetChartData = {
    type: "radar",
    data : {
        labels: [
          'Leadership and Governance',
          'Strategy and Investment',
          'Legislation, Policy, and Compliance',
          'Workforce',
          'Standards and Interoperability',
          'Infrastructure',
          'Services and Applications'
        ],
        datasets: [{
          label: 'Malasia',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Overall',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        legend: {
          position: 'bottom',
        },}
  };
  
  export default planetChartData;