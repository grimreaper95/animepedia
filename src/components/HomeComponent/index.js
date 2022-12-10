import HeaderBar from "../Header";
import RandomAnimeList from "../RandomAnimeComponent";
import {Container} from "react-bootstrap";
import AnimeSearch from "../AnimeSearch";
import React, {useEffect} from "react";
import "./index.css"
import {useSelector} from "react-redux";
import LikedAnime from "../LikedAnime";

const HomeScreen = () => {

    const {currentUser} = useSelector(state => state.userData)

    return (
        <>
            <HeaderBar/>
            <Container>
                <AnimeSearch/>
                <RandomAnimeList/>
                {
                    currentUser ? <>
                        {currentUser.accountType === 'USER' ? <>
                            <h1> Animes Liked </h1>

                            <LikedAnime/>
                        </> : null}

                        {currentUser.accountType === 'REVIEWER' ? <>
                            <h1> Reviews Posted </h1>


                        </> : null}


                    </> : null

                }
            </Container>
        </>
    );
}
export default HomeScreen;