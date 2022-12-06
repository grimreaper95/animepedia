import HeaderBar from "../Header";
import RandomAnimeList from "../RandomAnimeComponent";
import NavigationSidebar from "../NavigationSidebar";
import { Container } from "react-bootstrap";
import AnimeSearch from "../AnimeSearch";
import React from "react";
import "./index.css"
const HomeScreen = () => {
  return (
    <>
      <HeaderBar />
      <Container>
        <div className="row mt-2">
          <div className="col-2">
            <NavigationSidebar active="explore" />
          </div>
            <AnimeSearch/>
            <RandomAnimeList/>
        </div>
      </Container>
    </>
  );
}
export default HomeScreen;