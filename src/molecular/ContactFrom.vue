<!-- <script setup>
import InputAtoms from '../atoms/InputAtoms.vue';
</script>

<template>
 <div class="contact-form">
<div class="name-filed">
        <InputAtoms
      v-model="name"
      title=" First Name"
      type="text"/>
          <InputAtoms
      v-model="name"
      title=" Last Name"
      type="text"/>
</div>
       <InputAtoms
      v-model="name"
      title="Email"
      type="text"/>
       <InputAtoms
      v-model="name"
      title="Telephone"
      type="text"/>
 </div>
</template>

<style scoped>
.contact-form {
    display: flex;
  flex-direction: column;
  
  padding: 20px;
}   

.name-filed {
    display: grid;
    grid-row: 1fr;
  gap: 20px;
}
</style> -->
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
</script>

<template>
  <form class="contact-form">
    <!-- Name fields -->
    <div class="name-fields">
      <InputAtoms
        v-model="firstName"
        title="First Name"
        type="text"
        :required="true"
      />
      <InputAtoms
        v-model="lastName"
        title="Last Name"
        type="text"
        :required="true"
      />
    </div>

    <!-- Contact info -->
    <InputAtoms v-model="email" title="Email" type="email" :required="true" />
    <InputAtoms
      v-model="telephone"
      title="Telephone"
      type="tel"
      :required="true"
    />

    <!-- Message -->
    <TextAreaAtoms v-model="message" title="Message" :required="true" />

    <!-- Terms and conditions -->
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

    <!-- Submit button -->
    <div class="button-form">
      <ButtonAtoms title="SUBMIT" :btwidth="'200px'" />
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* padding: 24px; */
  /* max-width: 700px; */
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

<!-- <script setup>
import { ref } from 'vue'
import InputAtoms from '../atoms/InputAtoms.vue'
import TextAreaAtoms from '../atoms/TextAreaAtoms.vue';
import ButtonAtoms from '../atoms/ButtonAtoms.vue';

// Separate refs for each field
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const telephone = ref('')
</script>

<template>
  <div class="contact-form">
    <div class="name-field">
      <InputAtoms
        v-model="firstName"
        title="First Name"
        type="text"
        required="true"
      />
      <InputAtoms
        v-model="lastName"
        title="Last Name"
        type="text"
        required="true"
      />
    </div>

    <InputAtoms
      v-model="email"
      title="Email"
      type="text"
      required="true"
    />
    
    <InputAtoms
      v-model="telephone"
      title="Telephone"
      type="text"
      required="true"
    />
    <TextAreaAtoms
      v-model="message"
      title="Message"
      type="text"/>
<div>
        <p> * required fields
</p>
<input type="checkbox" id="terms" name="terms" value="agree">
<p> I agree to the <span>Terms & Conditions</span></p>
</div>
     <div class="button-form">
         <ButtonAtoms title=" SUBMIT
"
btwidth="200px" />
     </div>
  </div>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.name-field {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.button-form {
  display: flex;
  justify-content: end;
  margin-top: 20px;
  
}
</style> -->
