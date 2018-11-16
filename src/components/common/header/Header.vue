<template>
  <header>
    <nav class="navbar navbar-dark bg-dark row">
        <div class="col-3">
          <router-link to="/" class="navbar-brand">VueCRM</router-link>
        </div>
        <div class="col-9">
          <h1 class="h4 text-light text-capitalize">
            {{$route.path === '/' ? 'dashboard' : $route.path.replace('/','') }}
          </h1>
        </div>
    </nav>
  </header>
</template>
