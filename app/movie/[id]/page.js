import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import { fetchMovieApi } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await fetchMovieApi("movie/", params.id);

  if (!movieDetail) {
    notFound();
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
