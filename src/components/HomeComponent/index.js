import HeaderBar from "../Header";
import RandomAnimeList from "../RandomAnimeComponent";
import {Container} from "react-bootstrap";
import AnimeSearch from "../AnimeSearch";
import React, {useEffect} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import LikedAnime from "../LikedAnime";
import UserReview from "../UserReview/index.js"
import { findApprovedReviewerThunk } from "../../services/reviewer-thunk.js";

const HomeScreen = () => {

    const {currentUser} = useSelector(state => state.userData)
    const { currentReviewer, pendingList } = useSelector(state => state.reviewer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser) {
            
            dispatch(findApprovedReviewerThunk(currentUser.username))
            console.log(currentReviewer)
        }
    }, [])
    return (
        <>
            <HeaderBar/>
            <Container>
                <AnimeSearch/>
                <RandomAnimeList/>
                {
                    currentUser ? <>
                        {currentUser.accountType === 'USER' ? <>
                            <p className="title"> Animes Liked </p>

                            <LikedAnime/>
                        </> : null}

                        <hr />
                        { currentReviewer && <>
                            <p className="title"> Reviews Posted </p>
                            <UserReview/>
                        </> }
                    </> : null
                }
            </Container>
        </>
    );
}
export default HomeScreen;