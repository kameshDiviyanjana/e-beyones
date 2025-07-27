<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

defineProps({
  title: String,
  click: {
    type: Function,
    default: () => {},
  },
  btwidth : {
    type: String,
    default: "100%",
  },
});
</script>
<template>
  <button class="button-container" :style="{ width: btwidth }" @click="$emit('click')">{{ title }}</button>
</template>

<style scoped>
.button-container {
  padding: 10px 20px;
  background-color: #fbbb09;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}
.button-container:hover {
  background-color: #e0a800;
}
</style>
