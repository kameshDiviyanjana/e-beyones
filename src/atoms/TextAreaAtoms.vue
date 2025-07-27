<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  title: String,
  type: {
    type: String,
    default: "text", 
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);

function onInput(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <div class="textarea-container">
    <label class="textarea-label">{{ title }}</label>
    <textarea
      class="textarea-field"
      rows="4"
      :type="type"
      :value="inputValue"
      @input="onInput"
    >
    </textarea>
  </div>
</template>

<style scoped>
.textarea-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

}

.textarea-label {
  margin-bottom: 0.5rem;
 color: #a5a3a3;
}

.textarea-field {
  padding: 0.5rem;
  outline: none;
  color: #ffffff;
  background-color: #4d4c4c;
  font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box; 
  border: none;
}
</style>
