import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {randomAnimeThunk} from "../../services/random-anime-thunk";
import APP_URL from "../../constants";
import {Link} from "react-router-dom";
const RandomAnimeList = () => {
    const {animeList} = useSelector((state) => state.randomAnime)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(randomAnimeThunk())
    }, [])

    return (
        <>

            <div>
                <Row class="mt-5 justify-content-center align-items-stretch">
                    {animeList.filter((anime, a) => a < 8).map((anime, a) => (
                        <Col key={a} xs={12} md={4} lg={3} sm={6}>
                            <Card className="shadow p-0 mb-5 bg-white rounded">
                                <Card.Img src={anime.images.jpg.image_url} />
                                <Card.Body>

                                    <Link to={'/detail/' + anime.mal_id}  className="stretched-link" >
                                        <Card.Title>{anime.title}</Card.Title>
                                    </Link>
                                    <Card.Text>{anime.synopsis.substring(0, 100)} {anime.synopsis.length >= 200 && '...'}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </>
    )
}
export default RandomAnimeList;

