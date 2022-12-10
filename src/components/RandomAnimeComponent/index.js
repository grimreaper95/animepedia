import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {randomAnimeThunk} from "../../services/random-anime-thunk";
const RandomAnimeList = () => {
    const {animeList} = useSelector((state) => state.randomAnime)
    const dispatch = useDispatch()
    // const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        dispatch(randomAnimeThunk())
        // const fetchData = async () => {
        //     const response = await fetch(
        //         `https://api.jikan.moe/v4/anime`)
        //     const animeData = await response.json()
        //     setAnimeList(animeData.data)
        //     console.log(animeData);
        // }
        // fetchData()
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
                                    <a href={'http://localhost:3000/detail/' + anime.mal_id}>
                                        <Card.Title>{anime.title}</Card.Title>
                                    </a>
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

