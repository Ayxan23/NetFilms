import React from "react";
import HomeContainer from "@/containers/home";

import { getData, getSingleData } from "@/services/movie";

async function HomePage({ params }) {
  // const { results: topRatedMovies } = await getData("top_rated");
  // const { results: popularMovies } = await getData("popular");
  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getData("movie/top_rated?page=1"),
    getData("movie/popular?page=1"),
    getData("genre/movie/list"),
  ]);

  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await getSingleData(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=",
      params.category[0]
    );
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 12) : [],
      }}
    />
  );
}

export default HomePage;
