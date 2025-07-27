<script setup></script>

<template>
  <div class="header-image">
    <img
      src="../assets/Images/Header Image.jpg"
      alt="Header Image"
      class="header-img"
    />
  </div>
  <div class="header-description">
    <h1>MOVIE LIBRARY</h1>
    <p class="text-color">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy
      eirmod tempor invidunt ut labore et <br/> dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
  </div>
</template>

<style scoped>
/* .header-image {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
}

.header-description {
  margin-top: 15vh;
 max-width: 500px; 
  width: 90%;
  margin-left: 120px; 
  text-align: left;
  color: white;
   padding: 0 1rem; 
  font-size: larger;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px ; 
  font-family: Arial, sans-serif;
}

.text-color {
  color: gray;
}

.header-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
}

@media (max-width: 1024px) {
  .header-image {
    height: 500px;
  }
  .header-description {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media (max-width: 768px) {
  .header-image {
    height: 350px;
  }
  .header-description {
    padding-left: 20px;
    padding-right: 20px;
  }
  .header-description {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 480px) {
  .header-image {
    height: 250px;
  }
} */

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

/* Text section */
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

/* Tablet (max-width: 1024px) */
@media (max-width: 1024px) {
  .header-image {
    height: 500px;
  }

  .header-description {
    padding: 40px 30px;
  }
}

/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
  .header-image {
    height: 350px;
  }

  .header-description {
    padding: 30px 20px;
    /* text-align: center; */
  }
 
}

/* Extra small devices (max-width: 480px) */
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
