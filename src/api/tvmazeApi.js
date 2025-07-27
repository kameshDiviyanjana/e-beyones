// src/api/tvmazeApi.js

export const fetchShow = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch show with ID ${id}`);
  }
  return res.json();
};

export const fetchInitialShows = async (ids) => {
  return Promise.all(ids.map(fetchShow));
};

export const searchShows = async (query) => {
  const res = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error("Failed to search shows");
  }
  const data = await res.json();
  // The result is an array of { score, show }
  return data.map((result) => result.show);
};
