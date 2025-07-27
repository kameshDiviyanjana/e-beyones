
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/Logos/Logo White.svg" alt="Logo" class="logo-img" />
    </div>

    <button class="hamburger" @click="toggleMenu" aria-label="Open menu">
      &#9776;
    </button>

    <nav :class="{ open: isOpen }" class="side-nav">
      <button class="close-btn" @click="toggleMenu" aria-label="Close menu">
        &times;
      </button>
      <ul class="nav-links nav-new-clo">
        <li><a href="/">Home</a></li>
        <li><a href="#">Our Screens</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/movie">Movie Library</a></li>
        <li><a href="/mapContact">Location & Contact</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </nav>

    <nav class="desktop-nav">
      <ul class="nav-links ">
        <li><a href="/">Home</a></li>
        <li><a href="#">Our Screens</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/movie">Movie Library</a></li>
        <li><a href="/mapContact">Location & Contact</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>


.header {
  background-color: #070707;
  color: white;
  padding: 1rem 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 1s ease-in;
}

.logo-img {
  height: 40px;
}

.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
}

.side-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: right 0.3s ease-in-out;
  z-index: 999;
  backdrop-filter: blur(6px);
}

.side-nav.open {
  right: 0;
}

.close-btn {
  align-self: flex-end;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.nav-links a:hover {
  background-color: #333;
}

.desktop-nav {
  display: flex;
}

.desktop-nav .nav-links {
  flex-direction: row;
  gap: 2rem;
  margin: 0;
  display: flex;
}

.desktop-nav .nav-links li {
  list-style: none;
}
.desktop-nav .nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
    background: transparent;

  transition: all 0.3s ease;
}

.desktop-nav .nav-links a:hover {
  color: white;
  text-decoration: underline;
  text-decoration-color: rgb(232, 223, 223);
  text-underline-offset: 4px;
    background: transparent !important;

}

.desktop-nav .nav-links a:hover::after {
  width: 100%;
}

.desktop-nav .nav-links a.active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .header {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .logo {
    font-size: 1.2rem;
  }
}

@media (min-width: 1025px) {
  .side-nav {
    display: none;
  }
}

</style>