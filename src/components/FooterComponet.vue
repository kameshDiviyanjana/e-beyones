<!-- <script setup></script>

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
            <img src="../assets/Icons/Twitter White.svg"    alt="Twitter" />
        
        <img src="../assets/Icons/Youtube White.svg" alt="youtube"/> 
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2022 Amadeus Hotels. All rights reserved.</p>
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

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
   width: 1200px;
    margin: 0 auto;
  
}

.company-info h3 {
  margin: 0 0 10px;
}

.company-info p {
  margin: 5px 0;
}

.social-links a {
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
  gap: 10px;
  display: flex;
}

.copyright {
  font-size: 12px;
  color: #ccc;
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
   width: 1200px;
    margin: 0 auto;
  
}
</style> -->
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
/* .footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px 15px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.company-info h3 {
  margin-bottom: 10px;
}

.company-info p {
  margin: 4px 0;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-links img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.copyright {
  font-size: 12px;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  max-width: 1200px;
  margin: 20px auto 0;
  gap: 4px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .social-links {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 10px;
  }

  .footer-content {
    gap: 15px;
  }

  .social-links img {
    width: 25px;
    height: 25px;
  }

  .copyright {
    font-size: 11px;
  }
} */
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

/* .social-links {
  display: flex;
  gap: 10px;
}

.social-links img {
  width: 24px;
  height: 24px;
} */
.social-links {
  display: flex;
  align-items: center; /* Align text and icons vertically */
  gap: 10px;
}

.social-links p {
  margin: 0; /* Remove default spacing */
  white-space: nowrap; /* Prevent wrap */
}

/* For MOBILE: center everything */
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

/* For TABLET: keep layout left-aligned like desktop */
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
