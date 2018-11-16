export const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: [170000,280000,27000,532000,123000,76000,454000,936000,48000,510000,245000,939000],
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
