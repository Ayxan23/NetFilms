import React from "react";

import CategoriesLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

function Loading() {
  return (
    <div style={{ height: "100%" }}>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  );
}

export default Loading;
