import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { addLikedAnimeThunk } from "../../services/liked-anime-thunk.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateReview from "../CreateReview/index.js";
import ReviewList from "../AnimeReview/index.js";

import {
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { getLikesCount, getUserLikesAnime } from "../../services/liked-anime-service";

const AnimeDetail = () => {
    const params = useParams();

    const { currentUser } = useSelector(state => state.userData);
    const [animeInfo, setAnimeDetail] = useState([]);
    const [animeImage, setAnimeImage] = useState([]);
    const [animeTrailer, setAnimeTrailer] = useState([]);
    const [animeGenre, setAnimeGenre] = useState([]);
    const [animeStreaming, setAnimeStream] = useState([]);

    const dispatch = useDispatch();
    const [animeLikes, setAnimeLikes] = useState(0);
    const [userLikesAnime, setUserLikesAnime] = useState(false);



    const likeAnimeHandler = async () => {
        if (!currentUser) {
            alert('You need to login to perform this action!')
            return;
        }
        if (userLikesAnime) {
            return;
        }
        const userLikedAnime = {
            userId: currentUser._id,
            animeId: animeInfo.mal_id,
            animeImage: animeImage.image_url,
            animeTitle: animeInfo.title
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
            const userLikesAnime = await getUserLikesAnime(
                {
                    userId: currentUser._id,
                    animeId: params.id
                });
            setUserLikesAnime(userLikesAnime)
        }

        fetchData()
        getTotalLikes();
        checkIfUserLikesAnime();
    }, [])



    return (
        <>
            <HeaderBar />
            <Container>
                <Row>
                    <Col>
                        <span className="title">
                            {animeInfo.title}
                        </span> <br />
                        <span className="fw-bold">
                            {animeInfo.title_japanese}
                        </span> <br />
                        <span>
                            {animeInfo.type} . {animeInfo.duration} . Episodes {animeInfo.episodes}
                        </span>
                    </Col>
                </Row>

                <Row className="mt-3 photo-section">
                    <Col className="col-3">
                        <div className="anime-img">
                            <img height="320" src={animeImage.image_url} />

                        </div>
                        <a className={`${userLikesAnime ? 'like-selected' : 'like-unselected'}`}>
                            <FontAwesomeIcon icon={faThumbsUp} onClick={likeAnimeHandler} />
                        </a>
                        { } {animeLikes} likes
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
                    !currentUser || currentUser.accountType == 'REVIEWER'?
                    <CreateReview anime_id={params.id} />: null
                }
                <ReviewList anime_id={params.id} />

            </Container>
        </>
    )
}
export default AnimeDetail;

