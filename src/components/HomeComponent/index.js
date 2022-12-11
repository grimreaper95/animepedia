import HeaderBar from "../Header";
import RandomAnimeList from "../RandomAnimeComponent";
import {Container} from "react-bootstrap";
import AnimeSearch from "../AnimeSearch";
import React, {useEffect} from "react";
import "./index.css"
import {useSelector} from "react-redux";
import LikedAnime from "../LikedAnime";
import UserReview from "../UserReview/index.js"

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

                        <hr />
                        {currentUser.accountType === 'REVIEWER' ? <>
                            <p className="title"> Reviews Posted </p>
                            <UserReview/>
                        </> : null}
                    </> : null
                }
            </Container>
        </>
    );
}
export default HomeScreen;