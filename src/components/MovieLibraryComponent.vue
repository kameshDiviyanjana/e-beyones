<template>
  <div class="library-back-ground">
    <div class="movie-library">
      <div ref="headerTitleRef" class="header-list">
        <h1 style="color: white">Collect Your Favourites</h1>

        <div class="search-bar">
        <input
            v-model="searchQuery"
            @input="searchMovie"
            type="text"
            placeholder="Search title and add to grid"
          />
        </div>
      </div>

      <hr />

      <div  ref="headerRef" class="movie-list">
        <div v-if="movies.length === 0" class="no-movies-message">
          <p>No items</p>
        </div>

        <div
        
          class="movie-item"
          v-for="(movie, index) in movies"
          :key="movie.id"
          :ref="el => movieRefs[index] = el"
        >
          <span class="close-icon" @click="removeMovie(index)">×</span>

          <img :src="movie.image?.medium" :alt="movie.name" />
          <div class="movie-card-bottom">
            <h2>{{ movie.name }}</h2>
            <p v-html="truncate(movie.summary || '', 160)"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fetchInitialShows,searchShows } from '../api/tvmazeApi' 
gsap.registerPlugin(ScrollTrigger)
const movies = ref([])
const searchQuery = ref('')
const movieRefs = []
const headerRef = ref(null)
const headerTitleRef = ref(null)

const initialIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

onMounted(async () => {
  movies.value = await fetchInitialShows(initialIds);
});

const searchMovie = async () => {

  const query = searchQuery.value.trim();

  if (!query) {
    movies.value = await fetchInitialShows(initialIds);
    return;
  }

  try {
    movies.value = await searchShows(searchQuery.value);
  } catch (err) {
    console.error(err);
    alert('Search failed.');
  }
};


onMounted(() => {
  gsap.from(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  })
})

onMounted(() => {
  gsap.from(headerTitleRef.value, {
    scrollTrigger: {
      trigger: headerTitleRef.value,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power2.out',
  })
})




const truncate = (text, length) => {
  return text.length > length ? text.slice(0, length) + '...' : text
}

const removeMovie = (index) => {
  const el = movieRefs[index]
  gsap.to(el, {
    opacity: 0,
    y: 50,
    duration: 0.4,
    onComplete: () => {
      movies.value.splice(index, 1)
    },
  })
}
</script>
<style scoped>

.library-back-ground {
  background-color: #1f1f1f;
  margin-top: 20px;
}

.movie-library {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
}

.header-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.search-bar {
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
}

.search-bar input[type="text"] {
  background-color: transparent;
  border: 1px solid #aaa;
  padding: 10px 40px 10px 40px;
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px 20px;
  padding-left: 40px;
}

.no-movies-message {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 40px 0;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.movie-item {
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #222;
  transition: transform 0.3s ease;
}

.movie-item:hover {
  transform: translateY(-5px);
}

.movie-item img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.movie-card-bottom {
  padding: 15px;
  background-color: #333030;
  color: white;
}

.movie-item h2 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
}

.movie-item p {
  font-size: 0.95rem;
  color: #ddd;
  line-height: 1.4;
}

.close-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.2s;
}

.close-icon:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

@media (max-width: 1024px) {
  .movie-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .header-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .search-bar input {
    width: 100%;
  }

  .movie-item h2 {
    font-size: 1rem;
  }

  .movie-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .movie-list {
    grid-template-columns: 1fr;
  }

  .movie-card-bottom {
    padding: 12px;
  }

  .movie-item img {
    height: 300px;
  }
}

</style>

