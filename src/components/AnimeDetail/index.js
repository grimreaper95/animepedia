import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";
const AnimeDetail = () => {
    const params = useParams();
    const [animeInfo, setAnimeDetail] = useState([]);
    const [animeImage, setAnimeImage] = useState([]);
    const [animeTrailer, setAnimeTrailer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${params.id}/full`)
            const animeData = await response.json()
            setAnimeDetail(animeData.data)
            setAnimeImage(animeData.data.images.jpg)
            setAnimeTrailer(animeData.data.trailer)
            console.log(animeData);
        }
        fetchData()
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
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <img src={animeImage.image_url} />
                    </Col>
                    <Col className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={animeTrailer.embed_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </Col>
                </Row>
                {/* <div class="card-group">
                    <div class="card">
                        <img class="card-img-top max-height-img" src={animeImage.image_url} alt="Card image cap"/>
                    </div>
                    <div class="card video-responsive">
                    <iframe
                            width="853"
                            height="480"
                            src={animeTrailer.embed_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div> */}
            </Container>
        </>
    )
}
export default AnimeDetail;

