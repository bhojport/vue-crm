export const data = {
  labels: ["below 21 years", "21 to 30 years", "31 to 40 years", "41 to 50 years", "51 to 60 years", "above 60 years"],
  datasets: [
    {
      data: [3000,27000,22000,15000,5000,3000],
      label: "Users",
      backgroundColor: '#00f'
    },
  ],
}

export const options = {
  scales: {
    legend: {
      display: false,
    },
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
      
    }],
    yAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
    }],
  },
}
