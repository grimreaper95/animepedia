import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findAllReviewsForAnime, createReview, removeReview } from "../../services/anime-review-service.js";
import { Card, Row, Col, Container } from "react-bootstrap";

const AnimeReview = () => {
    const params = useParams();
    const [reviewList, setReviewList] = useState([]);
    const dispatch = useDispatch()
    
    useEffect(() => {

        const getReviewList = async () => {
            const reviewListResponse = await findAllReviewsForAnime(params.id)
            setReviewList(reviewListResponse)
        }

        getReviewList();
        console.log(reviewList);

    }, [])

    return (
        <>
            hey
        </>
    )
}

export default AnimeReview