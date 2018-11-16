export const data = {
  labels: ["Electronics", "Books and Movies", "Clothing, Shoes and Jewelry", "Personal Care and Beauty", "Home, Kitchen and Garden", "Toys and Games", "Pet Supplies", "Groceries and Other Food", "Automotive", "Baby Products", "Sports Equipment", "Mobile Devices", "Others"],
  datasets: [
    {
      data: [300, 450, 118, 788, 359, 114, 244, 910, 121, 457, 118, 81, 703],
      label: "Sold",
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
