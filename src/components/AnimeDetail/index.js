import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { findAllReviewsForAnime, removeReview, findAllReviewsByUser } from "../../services/anime-review-service.js";
import { createReviewThunk } from "../../services/anime-review-thunk.js"
import { Rating } from 'react-simple-star-rating'
import { addLikedAnimeThunk } from "../../services/liked-anime-thunk";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";


import {
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { findUser } from "../../services/user-service";
import { getLikesCount } from "../../services/liked-anime-service";

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
    const [animeLike, setAnimeLike] = useState(0);
    const [reviewerList, setReviewer] = useState([])


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
        setRating(rate)
    }

    const renderIcon = () => <FontAwesomeIcon
        icon={faStar}
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);

    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    const likeAnimeHandler = () => {
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
        dispatch(addLikedAnimeThunk(userLikedAnime))
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

        const getReviewList = async () => {
            const reviewListResponse = await findAllReviewsForAnime(params.id)
            console.log(reviewListResponse)
            const reviewData = reviewListResponse.data

            let reviewerL = []
            for (let r in reviewData) {
                const reviewerResp = await findUser(reviewData[r].reviewBy)
                reviewerL.push(reviewerResp)
            }
            console.log(reviewerL)
            setReviewer(reviewerL)
            setReviewList(reviewData)
        }


        const getTotalLikes = async () => {
            const animeLikes = await getLikesCount(params.id)
            // setUserData(userData);
            console.log(animeLikes)
            setAnimeLike(animeLikes)
        }

        fetchData()
        getReviewList();
        getTotalLikes();

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
                        <div className="anime-img">
                            <img height="320" src={animeImage.image_url} />

                        </div>
                        <a className={`text-decoration-none ${animeLike > 0 ? 'wd-reaction-tab-selected' : ''}`}>
                            <FontAwesomeIcon icon={faThumbsUp} onClick={likeAnimeHandler} />
                        </a>
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

                <div class="card mt-5 shadow-lg p-3 bg-body rounded">
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

                <div>
                    <Row class="mt-5 justify-content-center align-items-stretch">
                        {reviewList.filter((review, a) => a < 8).map((review, a) => (
                            <Col key={a} xs={12} md={4} lg={3} sm={6}>
                                <Card className="shadow p-0 mb-5 bg-white rounded">
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="rounded-circle" height={48} src={`/images/profile.png`} />
                                            </div>
                                            <div className="col-8">
                                                <div className="fw-bold">{reviewerList[a].firstName} {reviewerList[a].lastName}</div>
                                                <div>{reviewerList[a].username}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <Card.Text>{review.review}</Card.Text>
                                        <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {renderIcons(review.rating)}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
            </Container>
        </>
    )
}
export default AnimeDetail;

