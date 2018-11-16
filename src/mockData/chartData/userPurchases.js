export const data = {
  labels: ["Electronics", "Books and Movies", "Clothing, Shoes and Jewelry", "Personal Care and Beauty", "Home, Kitchen and Garden", "Toys and Games", "Pet Supplies", "Groceries and Other Food", "Automotive", "Baby Products", "Sports Equipment", "Mobile Devices", "Others"],
  datasets: [
    {
      data: [4, 12, 18, 8, 3, 1, 2, 10, 1, 7, 18, 1, 3],
      label: "Purchases in year",
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
