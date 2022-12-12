import { Card, Row, Col} from "react-bootstrap";
import React, { useEffect} from 'react'
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {findAllLikedAnimeThunk} from "../../services/liked-anime-thunk";
import APP_URL from "../../constants";

const LikedAnime = () => {
    const {currentUser} = useSelector((state) => state.userData)
    const {likedAnimeList} = useSelector((state) => state.likedAnime)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllLikedAnimeThunk(currentUser._id))
    }, [])
    return (
        <div>
            <Row class="mt-5 justify-content-center align-items-stretch">
                {likedAnimeList?.map((anime) => (
                    <Col key={anime.animeId} xs={12} md={4} lg={3} sm={6}>
                        <Card className="shadow p-0 mb-5 bg-white rounded">
                            <Card.Img src={anime.animeImage} />
                            <Card.Body>
                                <a href={APP_URL.react + '/detail/' + anime.mal_id}>
                                    <Card.Title>{anime.animeTitle}</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default LikedAnime;

