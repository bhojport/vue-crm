<template>
  <div class="card border-0 mb-3">
  <div class="card-header bg-transparent border-0">
    <slot name="header"></slot>
  </div>
  <div class="card-body">
    <slot></slot>
  </div>
  <div class="card-footer bg-transparent border-0">
    <slot name="footer"></slot>
  </div>
</div>
</template>
