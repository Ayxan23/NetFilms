const API_URL = "https://api.themoviedb.org/3";
const fetchMovieApi = async (pathname, query = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const url = `${API_URL}/${pathname}${query}`;
  try {
    const res = await fetch(url, options);
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

const getData = async (pathname) => {
  return fetchMovieApi(pathname);
};

const getSingleData = async (pathname, genreId) => {
  return fetchMovieApi(pathname, genreId);
};

export { fetchMovieApi, getData, getSingleData };
