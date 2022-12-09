import HeaderBar from "../Header";
import RandomAnimeList from "../RandomAnimeComponent";
import { Container } from "react-bootstrap";
import AnimeSearch from "../AnimeSearch";
import React from "react";
import "./index.css"
const HomeScreen = () => {
  return (
    <>
      <HeaderBar />
      <Container>
            <AnimeSearch/>
            <RandomAnimeList/>
      </Container>
    </>
  );
}
export default HomeScreen;