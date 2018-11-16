// Bhojendra Note:
// Thinking if the following code can even be shortened

/* export const sortBy = (arr, field, order) => {
  if(typeof field === 'undefined') {
    arr.sort() // will sort in any field
    // Explanation:
    // There are three fields 'fullname', 'email', 'location'
    // So, this will sort by:
    // On first sort => fullname
    // On second sort => email
    // On third sort => location
    // On following sort, will repeat from start again
  }
  if(typeof order === 'undefined' || order.toLowerCase() === 'asc') {
    arr.sort((a, b) => {
      if(a[field] > b[field]) return 1
      else if(a[field] < b[field]) return -1
      else return 0
    })
  } else {
    arr.sort((a, b) => {
      if(a[field] < b[field]) return 1
      else if(a[field] > b[field]) return -1
      else return 0
    })
  }  
} */

// Okay, got an idea: need to swap the sorting variable

export const sortBy = (arr, field, order) => {
  if(typeof field === 'undefined') {
    arr.sort()
  } else {
    arr.sort((a, b) => {
      const isDescending = typeof order !== 'undefined' && order.toLowerCase() !== 'asc' && order.toLowerCase() !== 'ascending'
      if(isDescending) {
        [a, b] = [b, a] // order by descending
      }
      const aChar = a[field].toLowerCase()
      const bChar = b[field].toLowerCase()
      if(aChar > bChar) return 1
      else if(aChar < bChar) return -1
      else return 0
    })
  }
}