import React from "react";
import PopularFilmList from "../components/popularFilmList/PopularFilmList";
// import TrendingList from "../Components/TrendingList/TrendingList";


export default function HomePage() {
  return (
    <>
      <h2 className="titleListStyle">Trending today:</h2>
      <PopularFilmList />
    </>
  );
}