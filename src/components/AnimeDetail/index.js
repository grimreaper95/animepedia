import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
const AnimeDetail = () => {
    const params = useParams();
    const [animeInfo, setAnimeDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${params.id}/full`)
            const animeData = await response.json()
            setAnimeDetail(animeData.data)
            console.log(animeData);
        }
        fetchData()
    }, [])


    return (
        <>
            <Row>
                    {animeInfo.mal_id}
            </Row>
        </>
    )
}
export default AnimeDetail;

