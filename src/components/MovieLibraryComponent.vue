<!-- <template>
  <div  class="library-back-ground">
    <div class="movie-library">
      <div class="header-list">
        <h1>Collect Your Favourites</h1>
    
        <div class="search-bar">
  <input type="text" id="searchInput" placeholder="Search title and add to grid" v-model="searchQuery"
      @input="searchMovie" />
</div>

      </div>
      <hr />
      <div class="movie-list">
        <div v-if="movies.length === 0" class="no-movies-message">
          <p>No items</p>
        </div>

        <div class="movie-item" v-for="movie in movies" :key="movie.id">
          <span class="close-icon" @click="removeMovie(movie.id)">×</span>

          <img :src="movie.poster" alt="Movie Poster" />
          <div class="movie-card-bottom">
            <h2>{{ movie.title }}</h2>
            <p>
              <span>
                {{
                  expandedMovies.has(movie.id)
                    ? movie.description
                    : truncate(movie.description)
                }}
              </span>

              <span
                v-if="
                  !expandedMovies.has(movie.id) &&
                  movie.description.length > 160
                "
                class="expand-toggle"
                @click="toggleExpand(movie.id)"
                style="cursor: pointer; user-select: none"
              >
                ...
              </span>

              <span
                v-else-if="expandedMovies.has(movie.id)"
                class="expand-toggle"
                @click="toggleExpand(movie.id)"
                style="cursor: pointer; user-select: none"
              >
                &nbsp;less
              </span>
            </p>
          </div>
        </div>
      </div>

    
    </div>
  </div>
</template>

<script setup>
import { ref,computed, onMounted, watch } from "vue";
import Batman from "../assets/Images/Batman.jpg";
import Spiderman from "../assets/Images/Spiderman.jpg";
import WildWest from "../assets/Images/Wild West.jpg";
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const originalMovies = [
  {
    id: 1,
    title: " Batman Returns",
    description:
      "  In Batman Returns, the Dark Knight faces two deadly foes threatening Gotham City. The grotesque and tragic Penguin, abandoned as a baby and raised in the sewers, rises to the surface with a sinister plan for revenge and political power. Meanwhile, meek secretary Selina Kyle is transformed into the mysterious and dangerous Catwoman after a near-death experience. As Batman battles these complex enemies, he also struggles with his own dual identity, and an unexpected romantic connection with Selina complicates his mission. Tim Burton's signature gothic style adds depth and darkness to this emotionally layered and action-packed sequel. ",
    poster: Batman,
  },
  {
    id: 2,
    title: "IncWild Wild Westeption",
    description:
      "  Set in a steampunk-infused Old West, this action-comedy follows U.S. Army Captain James West and inventor Artemus Gordon as they team up to stop the villainous Dr. Arliss Loveless. With bizarre gadgets and high-stakes chases, the duo must prevent a plot to assassinate President Grant and dismantle the United States. Packed with humor, action, and wild inventions, Wild Wild West is a quirky mix of western and science fiction. ",
    poster: WildWest,
  },
  {
    id: 3,
    title: "The Amazing Spiderman",
    description:
      "  Peter Parker, a socially awkward high school student, gains spider-like powers after being bitten by a genetically altered spider. As he uncovers the mystery of his parents' disappearance, he becomes the masked vigilante Spider-Man. Facing off against Dr. Curt Connors, a scientist who transforms into the monstrous Lizard, Peter must protect New York City while grappling with love, responsibility, and his true identity. ",
    poster: Spiderman,
  },
];

const movies = ref([...originalMovies]);


const searchQuery = ref('');
const searchMovie = () => {
  const query = searchQuery.value.toLowerCase();
  movies.value = originalMovies.filter(
    (movie) => movie.title.toLowerCase().includes(query)
  );
};


const expandedMovies = ref(new Set());

function toggleExpand(id) {
  if (expandedMovies.value.has(id)) {
    expandedMovies.value.delete(id);
  } else {
    expandedMovies.value.add(id);
  }
}

function truncate(text, length = 100) {
  return text.length > length ? text.substring(0, length) + " " : text;
}


function removeMovie(id) {
  movies.value = movies.value.filter((movie) => movie.id !== id);
}
const filteredMovies = computed(() =>
  movies.value.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const animateMovies = () => {
  gsap.utils.toArray(".movie-item").forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%", // when top of item hits 90% of viewport
        toggleActions: "play none none none", // only play once
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
    });
  });
};
onMounted(() => {
  animateMovies()

  // Optional: Hover scale animation
  const items = document.querySelectorAll(".movie-item")
  items.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.03, duration: 0.2 })
    })
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.2 })
    })
  })
})

// Watch search results and re-trigger animations
watch(filteredMovies, () => {
  // Wait for DOM update
  nextTick(() => {
    animateMovies()
  })
})


// Animate on mount
// onMounted(() => {
//   animateMovies();

//   // Hover scale animation
//   const items = document.querySelectorAll(".movie-item");
//   items.forEach((el) => {
//     el.addEventListener("mouseenter", () => {
//       gsap.to(el, { scale: 1.03, duration: 0.2 });
//     });
//     el.addEventListener("mouseleave", () => {
//       gsap.to(el, { scale: 1, duration: 0.2 });
//     });
//   });
// });

// // Re-animate when search results change
// watch(filteredMovies, () => {
//   animateMovies();
// });
</script>

<style scoped>
.library-back-ground{
background-color: #1f1f1f;
margin-top: 20px;
}
.movie-library {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
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
  background-color: #1e1e1e; /* dark background */
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar input[type="text"] {
  background-color: transparent;
  border: 1px solid #aaa;
  padding: 10px 40px; /* space for icon */
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px 20px;
  /* width: 300px; */
}



.no-movies-message {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 40px 0;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 38px;
  font-family: "Courier New", Courier, monospace;
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  z-index: 1;
}
.close-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.movie-item {
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
 
}

.movie-item:hover {
  transform: translateY(-5px);
}

.movie-item img {
  width: 100%;
  height: 500px;
  object-fit: cover;
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

/* ✅ Responsive tweaks */
@media (max-width: 768px) {
  .header-list {
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
  }

  .search-bar input {
     width: 250px;
  }
 
  .movie-item h2 {
    font-size: 1rem;
  }

  .movie-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .movie-library {
    padding: 15px;
  }

  .movie-list {
    grid-template-columns: 1fr;
  }

  .search-bar input {
    width: 250px;
  }

  .movie-card-bottom {
    padding: 10px;
  }
}
</style> -->
<template>
  <div class="library-back-ground">
    <div class="movie-library">
      <!-- Title and Search -->
      <div class="header-list">
        <h1 style="color: white">Collect Your Favourites</h1>

        <div class="search-bar">
          <!-- <input
            v-model="searchQuery"
            @keyup.enter="searchMovie"
            type="text"
            placeholder="Search title and add to grid"
          /> -->
          <input type="text" id="searchInput" placeholder="Search title and add to grid" v-model="searchQuery"
      @input="searchMovie" />
        </div>
      </div>

      <hr />

      <!-- Movie Grid -->
      <div class="movie-list">
        <div v-if="movies.length === 0" class="no-movies-message">
          <p>No items</p>
        </div>

        <div
          class="movie-item"
          v-for="(movie, index) in movies"
          :key="movie.id"
          :ref="el => movieRefs[index] = el"
        >
          <!-- Remove Button -->
          <span class="close-icon" @click="removeMovie(index)">×</span>

          <img :src="movie.image?.medium" :alt="movie.name" />
          <div class="movie-card-bottom">
            <h2>{{ movie.name }}</h2>
            <p v-html="truncate(movie.summary || '', 140)"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import gsap from 'gsap'

const movies = ref([])
const searchQuery = ref('')
const searchResults = ref([]) // <-- ADD THIS
const movieRefs = []

// Fetch initial 3 shows from TVMaze
const initialIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fetchShow = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return res.json()
}

onMounted(async () => {
  const data = await Promise.all(initialIds.map(id => fetchShow(id)))
  movies.value = data
})

// Animate on movie addition
watch(movies, async (newVal, oldVal) => {
  await nextTick()
  if (newVal.length > oldVal.length) {
    const el = movieRefs[newVal.length - 1]
    gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
  }
})

// Search by title and add
// const searchMovie = async () => {
//   if (!searchQuery.value.trim()) return
//   const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery.value}`)
//   const data = await res.json()

//   if (data.length > 0) {
//     const newShow = data[0].show
//     const alreadyExists = movies.value.find((m) => m.id === newShow.id)
//     if (!alreadyExists) {
//       movies.value.push(newShow)
//     }
//   }

//   searchQuery.value = ''
// }
const searchMovie = async () => {
  if (!searchQuery.value.trim()) return

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery.value}`)
  const results = await res.json()

  if (results.length > 0) {
    const firstMatch = results[0].show
    const exists = movies.value.some(m => m.id === firstMatch.id)

    if (!exists) {
      movies.value.push(firstMatch)
    }
  }

   searchQuery.value = ''
  //  if (!searchQuery.value.trim()) return

  // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery.value}`)
  // const results = await res.json()

  // // Store all fetched shows in searchResults
  // searchResults.value = results.map(result => result.show)
}


// Truncate text
const truncate = (text, length) => {
  return text.length > length ? text.slice(0, length) + '...' : text
}

// Animate removal
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
.library-back-ground{
background-color: #1f1f1f;
margin-top: 20px;
}
.movie-library {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
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
  background-color: #1e1e1e; /* dark background */
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar input[type="text"] {
  background-color: transparent;
  border: 1px solid #aaa;
  padding: 10px 40px; /* space for icon */
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px 20px;
  /* width: 300px; */
}



.no-movies-message {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 40px 0;
}

.movie-list {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* exactly 3 columns */
  gap: 30px;
  margin-top: 50px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 38px;
  font-family: "Courier New", Courier, monospace;
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  z-index: 1;
}
.close-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.movie-item {
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  transition: transform 0.3s ease;
 
}

.movie-item:hover {
  transform: translateY(-5px);
}

.movie-item img {
  width: 100%;
  height: 500px;
  object-fit: cover;
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

@media (max-width: 1024px) {
  .movie-list {
    grid-template-columns: repeat(2, 1fr); /* 2 on tablets */
  }
}

@media (max-width: 600px) {
  .movie-list {
    grid-template-columns: 1fr; /* 1 on mobile */
  }
}


/* ✅ Responsive tweaks */
@media (max-width: 768px) {
  .header-list {
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
  }

  .search-bar input {
     width: 250px;
  }
 
  .movie-item h2 {
    font-size: 1rem;
  }

  .movie-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .movie-library {
    padding: 15px;
  }

  .movie-list {
    grid-template-columns: 1fr;
  }

  .search-bar input {
    width: 250px;
  }

  .movie-card-bottom {
    padding: 10px;
  }
}
</style>

