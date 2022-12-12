import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";
import { useDispatch, useSelector } from "react-redux";
import {addLikedAnimeThunk, removeLikedAnimeThunk} from "../../services/liked-anime-thunk.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateReview from "../CreateReview/index.js";
import { findApprovedReviewerThunk } from "../../services/reviewer-thunk.js";
import ReviewList from "../AnimeReview/index.js";
import { getLikesCount, getUserLikesAnime } from "../../services/liked-anime-service";
import { findAllReviewsForAnimeThunk, findAverageRatingThunk } from "../../services/anime-review-thunk.js";

const AnimeDetail = () => {
    const params = useParams();

    const { currentUser } = useSelector(state => state.userData);
    const { reviewList, averageRating } = useSelector(state => state.review);
    const { currentReviewer, pendingList } = useSelector(state => state.reviewer);
    const [animeInfo, setAnimeDetail] = useState([]);
    const [animeImage, setAnimeImage] = useState([]);
    const [animeTrailer, setAnimeTrailer] = useState([]);
    const [animeGenre, setAnimeGenre] = useState([]);
    const [animeStreaming, setAnimeStream] = useState([]);

    const dispatch = useDispatch();
    const [animeLikes, setAnimeLikes] = useState(0);
    const [userLikesAnime, setUserLikesAnime] = useState(false);
    useEffect(() => {
        if (currentUser) {
            dispatch(findApprovedReviewerThunk(currentUser.username))
        }
        dispatch(findAllReviewsForAnimeThunk(params.id))
        dispatch(findAverageRatingThunk(params.id))
    }, [])



    const likeAnimeHandler = async () => {
        if (!currentUser) {
            alert('You need to login to perform this action!')
            return;
        }
        const userLikedAnime = {
            userId: currentUser._id,
            animeId: animeInfo.mal_id,
            animeImage: animeImage.image_url,
            animeTitle: animeInfo.title
        }
        if (userLikesAnime) {
            dispatch(removeLikedAnimeThunk(userLikedAnime))
            setAnimeLikes(animeLikes - 1)
            setUserLikesAnime(false)
            return;
        }
        dispatch(addLikedAnimeThunk(userLikedAnime))
        setAnimeLikes(animeLikes + 1)
        setUserLikesAnime(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${params.id}/full`)
            const animeData = await response.json()
            setAnimeDetail(animeData.data)
            setAnimeImage(animeData.data.images.jpg)
            setAnimeTrailer(animeData.data.trailer)
            setAnimeGenre(animeData.data.genres)
            setAnimeStream(animeData.data.streaming)
        }

        const getTotalLikes = async () => {
            const animeLikes = await getLikesCount(params.id)
            setAnimeLikes(animeLikes)
        }

        const checkIfUserLikesAnime = async () => {
            if(!currentUser) {
                return;
            }
            const userLikesAnime = await getUserLikesAnime(
                {
                    userId: currentUser._id,
                    animeId: params.id
                });
            setUserLikesAnime(userLikesAnime)
        }

        fetchData();
        getTotalLikes();
        checkIfUserLikesAnime();
    }, [])



    return (
        <>
            <HeaderBar />
            <Container>
                <div className="row">
                    <div class="col-8">
                        <span className="title">
                            {animeInfo.title}
                        </span> <br />
                        <span className="fw-bold">
                            {animeInfo.title_japanese}
                        </span> <br />
                        <span>
                            {animeInfo.type} . {animeInfo.duration} . Episodes {animeInfo.episodes}
                        </span>
                    </div>


                    <div class="card-group col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><a className={`${userLikesAnime ? 'like-selected' : 'like-unselected'}`}>
                                    <span class="fa-solid fa-thumbs-up fa-2x" onClick={likeAnimeHandler}></span>
                                </a>
                                    <span className="star-text ms-2">{ } {animeLikes} likes</span></h5>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><span class="fa fa-star fa-2x checked"></span>
                                    <span className="star-text ms-2">{averageRating} / 5</span></h5>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <Row className="mt-3 photo-section">
                    <Col className="col-3">
                        <div className="anime-img">
                            <img height="320" src={animeImage.image_url} />

                        </div>

                    </Col>
                    <Col className="video-responsive col-9">
                        <iframe
                            src={animeTrailer.embed_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </Col>
                </Row>

                <div className="card mt-5 shadow-lg p-3 bg-body rounded">
                    <div className="card-body">
                        {animeGenre.map((genre, a) => (
                            <span className="card-link badge rounded-pill bg-dark card-title">{genre.name}</span>
                        ))}
                        <p className="card-text">{animeInfo.synopsis}</p>
                        {animeStreaming.map((stream, a) => (
                            <a href={stream.url} className="card-link"><img width="30" height="30" src={"../../images/" + stream.name + ".png"} /></a>

                        ))}
                    </div>
                </div>

                <hr />
                {
                    (!currentUser || currentReviewer) &&
                    <CreateReview anime_id={params.id} anime_info={animeInfo} anime_image={animeImage} />
                }
                <ReviewList anime_id={params.id} />

            </Container>
        </>
    )
}
export default AnimeDetail;

