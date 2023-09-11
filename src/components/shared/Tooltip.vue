<template>
  <div
    class="absolute flex flex-col max-w-md right-0 top-0"
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
