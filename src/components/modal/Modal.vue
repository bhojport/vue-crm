<template>
<div>
<button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+modalId" v-if="!isModalOnly">
  {{ buttonText || 'Open' }}
</button>
<div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId+'-label'" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-info" :id="modalId+'-title'">{{ modalTitle || buttonText || 'Modal Title' }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ closeButtonText || 'Close' }}</button>
        <button type="button" class="btn btn-primary" @click="onModalOk">{{ okButtonText || 'Ok' }}</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { eventHub } from '@/hub'

export default {
  props: [
    'modalId',
    'isModalOnly',
    'buttonText',
    'modalTitle',
    'closeButtonText',
    'okButtonText',
    'okEvent'
  ],
  methods: {
    onModalOk() {
      eventHub.$emit(this.okEvent)
    }
  }
}
</script>
