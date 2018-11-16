export const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: [17000,28000,7000,32000,13000,6000,54000,36000,8000,10000,45000,39000],
      label: "Incurred",
      backgroundColor: '#00f'
    },
  ],
}

export const options = {
  scales: {
    legend: {
      // display: false,
    },
    xAxes: [{
      gridLines: {
        display: false,
        // drawBorder: false,
      },
      ticks: {
        // display: false,
      }      
    }],
    yAxes: [{
      gridLines: {
        display: false,
        // drawBorder: false,
      },
    }],
  },
}
