<template>
    <button style="color: orange;font-size: 20px;">
      <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name:'MyButton'
})
export default class MyButton extends Vue{
  constructor() {
    super();
  }
  
}
</script>

