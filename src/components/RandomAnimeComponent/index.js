import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import "./index.css"
const RandomAnimeList = () => {

    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime`)
            const animeData = await response.json()
            setAnimeList(animeData.data)
            console.log(animeData);
        }
        fetchData()
    }, [])


    return(
        <>
            <Row>
                {animeList.filter((anime, a) => a < 8).map((anime, a) => (
                    <Col key={a} xs={12} md={4} lg={3}>
                        <Card className="shadow p-0 mb-5 bg-white rounded">
                            <Card.Img src={anime.images.jpg.image_url} />

                            <Card.Body>
                                <a href = './detail'>
                                    <Card.Title>{anime.title}</Card.Title>
                                </a>

                                <Card.Text><p>{anime.synopsis.substring(0, 100)} {anime.synopsis.length >= 200 && '...'}</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default RandomAnimeList;

