<!-- <script setup>
import ContactFrom from '../molecular/ContactFrom.vue';
</script>
<template>
  <div class="contact-container">
    <div>
        <ContactFrom/>
    </div>
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.6321540671!2d79.77380331342476!3d6.921831560922283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1753516173093!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>
<style scoped>
.contact-container{
   display: flex;
    flex-direction: row;
}
</style> -->
<!-- 
<script setup>
import ContactFrom from "../molecular/ContactFrom.vue";
</script>

<template>
  <div class="contact-container">
    <div>
        <h1> How to reach us
</h1>
        <p> Lorem ipsum dolor sit amet, consetetur.</p>
    </div>
    <div class="contact-body">
      <div class="form-section">
        <ContactFrom />
      </div>
      <div class="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.6321540671!2d79.77380331342476!3d6.921831560922283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1753516173093!5m2!1sen!2slk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-body {
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
}
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

/* Both sections take 50% on desktop */
.form-section {
  flex: 1 1 28%;
}
.map-section {
  flex: 1 1 48%;
}

/* Make iframe responsive */
.map-section iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
  border-radius: 8px;
}

/* Responsive for tablets and mobile */
@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
  }

  .form-section,
  .map-section {
    flex: 1 1 100%;
  }

  .map-section iframe {
    height: 300px;
  }
}
</style> -->
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
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.6321540671!2d79.77380331342476!3d6.921831560922283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1753516173093!5m2!1sen!2slk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> -->
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
  /* padding: 60px ;  */
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

/* Layout container */
.contact-body {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Form section */
.form-section {
  flex: 1 1 20%;
  min-width: 300px;
   /* padding: 60px ;  */
}

/* Map section */
.map-section {
  flex: 1 1 45%;
  min-width: 300px;
}

/* Make iframe responsive */
.map-section iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
}

/* Responsive styles for tablets and below */
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
