<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="company-info">
        <h3>Amadeus IT Group</h3>
        <p>C. Salvador de Madariaga, 1</p>
        <p>28027 Madrid</p>
        <p>Spain</p>
      </div>

      <div class="social-links">
        <p>Follow us on</p>
        <img src="../assets/Icons/Twitter White.svg" alt="Twitter" />
        <img src="../assets/Icons/Youtube White.svg" alt="Youtube" />
      </div>
    </div>

    <div class="copyright">
      <p>Copyright © {{ currentYear }} Amadeus Hotels. All rights reserved.</p>
      <p>Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
}

.footer-content,
.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  font-size: 12px;
  margin: 0 auto;
}

.company-info h3 {
  margin: 0 0 10px;
}

.company-info p {
  margin: 5px 0;
}


.social-links {
  display: flex;
  align-items: center; 
  gap: 10px;
}

.social-links p {
  margin: 0;
  white-space: nowrap; 
}

@media (max-width: 576px) {
  .footer-content,
  .copyright {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .company-info,
  .social-links {
    margin-bottom: 15px;
  }

  .social-links {
    justify-content: center;
  }
  .social-links {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
}

@media (min-width: 577px) and (max-width: 1024px) {
  .footer-content,
  .copyright {
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    text-align: left;
  }
}
</style>
