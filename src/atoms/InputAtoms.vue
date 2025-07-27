<!-- <script setup>
import { defineProps } from 'vue'


defineProps({
  title: {
    type: String,
    default: ''
  },
  targetValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="input-container">
    <label for="inputField" class="input-label"> {{ title }}</label>
    <input
     input type="text" :value="targetValue" @input="targetValue = $event.target.value"
    />
  </div>
</template> -->
<script setup>
import {  defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  title: String,
  type: {
    type: String,
    default: "text", // default input type
  },
  required: {
    type: Boolean,
    default: false,
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
  <div class="input-container">
    <label class="input-label"
      >{{ title }} <span v-if="required" class="text-red-500">*</span></label
    >
    <input
      class="input-field"
      :type="type"
      :value="inputValue"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.input-label {
  margin-bottom: 0.5rem;
  color: #a5a3a3;
}

.input-field {
  padding: 0.5rem;
  outline: none;
  color: #ffffff;
  background-color: #4d4c4c;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box; /* Ensures padding is included in width */
   border-radius: 4px;
  border: none;
}
</style>
