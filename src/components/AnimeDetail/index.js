import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { findAllReviewsForAnime, removeReview, findAllReviewsByUser } from "../../services/anime-review-service.js";
import { createReviewThunk } from "../../services/anime-review-thunk.js"
import { Rating } from 'react-simple-star-rating'

const AnimeDetail = () => {
    const params = useParams();
    let [reviewByUser, setReviewByUser] = useState('');
    const { currentUser } = useSelector(state => state.userData);
    const [animeInfo, setAnimeDetail] = useState([]);
    const [animeImage, setAnimeImage] = useState([]);
    const [animeTrailer, setAnimeTrailer] = useState([]);
    const [animeGenre, setAnimeGenre] = useState([]);
    const [animeStreaming, setAnimeStream] = useState([]);
    const [reviewList, setReviewList] = useState([]);
    const [rating, setRating] = useState(0)
    const dispatch = useDispatch();

    const reviewClickHAndler = () => {
        const newReview = {
            animeId: params.id,
            reviewBy: currentUser,
            review: reviewByUser,
            rating: rating
        }
        dispatch(createReviewThunk(newReview));
    }

    // Catch Rating value
    const handleRating = (rate) => {
        console.log('rate', rate);
        setRating(rate)
    }

    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)


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
            console.log(animeData);
        }

        const getReviewList = async () => {
            const reviewListResponse = await findAllReviewsForAnime(params.id)
            console.log(reviewListResponse)
            const reviewData = await reviewListResponse.data
            setReviewList(reviewData)
            console.log(reviewData);
        }

        fetchData()
        getReviewList();

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
                    <Col class="col-3">
                        <img height="320" src={animeImage.image_url} />
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

                <div class="card mt-3 shadow-lg p-3 bg-body rounded">
                    <div class="card-body">
                        {animeGenre.map((genre, a) => (
                            <span class="card-link badge rounded-pill bg-dark card-title">{genre.name}</span>
                        ))}
                        <p class="card-text">{animeInfo.synopsis}</p>
                        {animeStreaming.map((stream, a) => (
                            <a href={stream.url} class="card-link"><img width="30" height="30" src={"../../images/" + stream.name + ".png"} /></a>

                        ))}
                    </div>
                </div>

                <hr />
                <h2 className="title">Reviews</h2>
                <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <h5>Add a review</h5>
                        <Rating
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                        /* Available Props */
                        />

                        <hr />

                        <div>
                            <textarea value={reviewByUser} placeholder="Share what you thought about the anime..."
                                className="form-control border"
                                onChange={(event) => setReviewByUser(event.target.value)}>
                            </textarea>
                        </div>
                        <hr />
                        <div className="float-end">
                            <button className="rounded-pill btn btn-dark float-end mt-2 ps-3 pe-3 fw-bold"
                                onClick={reviewClickHAndler}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default AnimeDetail;

