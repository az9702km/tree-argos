<template>
  <div class="text-center h-full py-14 px-12 bg-white">
    <h1 class="text-base font-medium mb-12">
      <slot name="CardHeader"></slot>
    </h1>
    <slot name="CardBody"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoCard",
});
</script>
