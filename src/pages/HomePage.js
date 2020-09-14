import React from "react";
import PopularFilmList from "../components/popularFilmList/PopularFilmList";



export default function AsyncHomePage() {
  return (
    <>
      <h2 className="titleListStyle">Trending today:</h2>
      <PopularFilmList />
    </>
  );
}