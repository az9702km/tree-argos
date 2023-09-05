<template>
  <div class="text-center m-4 p-12 bg-white rounded-2xl">
    <h1 class="text-lg font-semibold mb-12 text-purple-500">
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
