export const data = {
  labels: ["Male", "Female", "Other", "Gender non-confirming", "Transgender"],
  datasets: [
    {
      data: [49400,5000,1000,4000,500],
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
      }      
    }],
    yAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
    }],
  },
}
