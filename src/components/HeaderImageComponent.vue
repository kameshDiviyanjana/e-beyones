<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)

onMounted(() => {
  gsap.from(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  })
})

</script>

<template>
  <div class="header-image">
    <img
      src="../assets/Images/Header Image.jpg"
      alt="Header Image"
      class="header-img"
    />
  </div>
  <div ref="headerRef" class="header-description">
    <h1>MOVIE LIBRARY</h1>
    <p class="text-color">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy
      eirmod tempor invidunt ut labore et <br/> dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
  </div>
</template>

<style scoped>

.header-image {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
}

.header-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.header-description {
  color: white;
  text-align: left;
  font-size: larger;
  padding: 60px;
  margin: 0 auto;
  max-width: 1200px;
  font-family: Arial, sans-serif;
}

.text-color {
  color: gray;
}

@media (max-width: 1024px) {
  .header-image {
    height: 500px;
  }

  .header-description {
    padding: 40px 30px;
  }
}

@media (max-width: 768px) {
  .header-image {
    height: 350px;
  }

  .header-description {
    padding: 30px 20px;
  }
 
}

@media (max-width: 480px) {
  .header-image {
    height: 250px;
  }

  .header-description {
    padding: 20px 15px;
    font-size: medium;
  }
   br{
    display: none;
  }
}

</style>
