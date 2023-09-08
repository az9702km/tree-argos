<template>
  <div class="text-center h-full py-14 px-12 bg-white overflow-y-auto">
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
  props: {
    status: String,
  },
  created() {},
  computed: {
    getStatusColor() {
      switch (this.status) {
        case "good":
          return "fill-green-400";
        case "bad":
          return "fill-red-400";
        case "ok":
          return "fill-yellow-400";
        default:
          return "fill-yellow-400";
      }
    },
  },
});
</script>
