<script setup>
import ContactFrom from "../molecular/ContactFrom.vue";

</script>

<template>
  <div class="contact-container">
    <div class="contact-header ">
      <h1>How to reach us</h1>
      <p>Lorem ipsum dolor sit amet, consetetur.</p>
    </div>

    <div class="contact-body">
      <div class="form-section">
        <ContactFrom />
      </div>

      <div class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48588.133010545425!2d-3.7152472!3d40.4363503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2slk!4v1753550118669!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px  ; 
  font-family: Arial, sans-serif;
}

.contact-header {
 
  margin-bottom: 30px;
}

.contact-header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.contact-header p {
  color: #555;
  font-size: 1rem;
}


.contact-body {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-section {
  flex: 1 1 20%;
  min-width: 300px;
   
}

.map-section {
  flex: 1 1 45%;
  min-width: 300px;
}

.map-section iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
}

@media (max-width: 1024px) {
  .contact-body {
    flex-direction: column;
  }


  .form-section,
  .map-section {
    flex: 1 1 100%;
  }

  .map-section iframe {
    height: 300px;
  }

  .contact-header h1 {
    font-size: 1.5rem;
  }
}
@media (max-width: 640px) {
  .contact-container{
    padding: 20px;
  }
 
}
</style>
