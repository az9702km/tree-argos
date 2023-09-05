<template>
  <div
    class="absolute flex flex-col px-4 py-4 rounded-md bg-slate-900/75 max-w-md"
    :style="{
      right: 'calc( 100% - ' + x + 'px)',
      bottom: 'calc( 100% - ' + y + 'px)',
    }"
  >
    <slot name="category"></slot>
    <slot name="pr-name"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: {
    x: Number,
    y: Number,
  },
});
</script>
