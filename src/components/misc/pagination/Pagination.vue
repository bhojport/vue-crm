<template>
  <nav aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><router-link :to="{path: 'users', query: { page: 1 } }" class="page-link">1</router-link></li>
    <li class="page-item"><router-link :to="{path: 'users', query: { page: 2 } }" class="page-link">2</router-link></li>
    <li class="page-item"><router-link :to="{path: 'users', query: { page: 3 } }" class="page-link">3</router-link></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
  </nav>
</template>

<script>
// Bhojendra Note:
// @TODO: Make paginaion
// first need to think how it should be implemented
// users/page/1, users/page/2
// or,
// users?page=1, users?page=2
// or just, increase decrease page number...?
export default {
  data: function() {
    return {
      pageNumber: 1
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    }
  }
}
</script>
