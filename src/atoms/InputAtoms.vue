<script setup>
import { defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  title: String,
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
   validateNow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);
const errorMessage = ref(""); 

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);

watch(
  () => props.validateNow,
  (triggered) => {
    if (triggered) validate();
  }
);


function validate() {
  if (props.required && !inputValue.value?.trim()) {
    errorMessage.value = `${props.title} is required.`;
  } else {
    errorMessage.value = "";
  }
}

function onInput(e) {
  inputValue.value = e.target.value;
  emit("update:modelValue", e.target.value);
  validate(); 
}


</script>

<template>
  <div class="input-container">
    <label class="input-label">
      {{ title }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      class="input-field"
      :class="{ 'input-error': errorMessage }"
      :type="type"
      :value="inputValue"
      @input="onInput"
      @blur="validate"
    />

   
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
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
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: border 0.3s;
}

.input-field.input-error {
  border: 1px solid #f87171; 
}

.error-text {
  color: #f87171;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
