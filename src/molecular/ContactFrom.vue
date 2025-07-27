
<script setup>
import { ref } from "vue";
import InputAtoms from "../atoms/InputAtoms.vue";
import TextAreaAtoms from "../atoms/TextAreaAtoms.vue";
import ButtonAtoms from "../atoms/ButtonAtoms.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const telephone = ref("");
const message = ref("");
const agreed = ref(false);
const validateTrigger = ref(false);

function submitForm() {
  event?.preventDefault(); 
    validateTrigger.value = true; 

  if (firstName.value && lastName.value && email.value && telephone.value && message.value && agreed.value) {
    alert("Form submitted successfully!");
    
    console.log("Form submitted successfully!");
  } else {
    console.error("Please fill in all required fields and agree to the terms.");
  }
}
</script>

<template>
  <form class="contact-form">
  
    <div class="name-fields">
      <InputAtoms
        v-model="firstName"
        title="First Name"
        type="text"
        :required="true"
              :validateNow="validateTrigger"

      />
      <InputAtoms
        v-model="lastName"
        title="Last Name"
        type="text"
        :required="true"
              :validateNow="validateTrigger"

      />
    </div>

   
    <InputAtoms v-model="email" title="Email" type="email" :required="true" />
    <InputAtoms
      v-model="telephone"
      title="Telephone"
      type="tel"
      :required="true"
            :validateNow="validateTrigger"

    />

  
    <TextAreaAtoms v-model="message" title="Message" :required="true" />

    
    <div class="terms-container">
      <p class="required-note">* Required fields</p>
      <div class="checkbox-wrapper">
        <input type="checkbox" id="terms" v-model="agreed" />
        <label for="terms">
          I agree to the
          <span class="highlighted-text">Terms & Conditions</span>
        </label>
      </div>
    </div>


    <div class="button-form">
      <ButtonAtoms title="SUBMIT" :btwidth="'200px'"  @click="submitForm"   />
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}


.name-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 640px) {
  .name-fields {
    grid-template-columns: 1fr;
  }
}

.terms-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.95rem;
  color: #555;
}

.required-note {
  font-size: 0.85rem;
  color: #888;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.highlighted-text {
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
    text-decoration: underline;
}

.button-form {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
