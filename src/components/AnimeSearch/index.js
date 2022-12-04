import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchAnimeThunk} from "../../services/anime-search-thunk";
import {Card, Col} from "react-bootstrap";

const AnimeSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {animeList, loading} = useSelector((state) => state.animeSearch)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(searchAnimeThunk(searchQuery))
    // }, [])
    return (
        <>
            <h1>Anime Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(searchAnimeThunk(searchQuery))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                        value={searchQuery}/>
                </li>
                {
                    animeList && animeList.map((anime, a) =>
                        <Col key={a} xs={12} md={4} lg={3}>
                            <Card className="shadow p-0 mb-5 bg-white rounded">
                                <Card.Img src={anime.images.jpg.image_url} />

                                <Card.Body>
                                    <a href={'http://localhost:3000/detail/' + anime.mal_id}>
                                        <Card.Title>{anime.title}</Card.Title>
                                    </a>

                                    {/*<Card.Text>{anime.synopsis.substring(0, 100)} {anime.synopsis.length >= 200 && '...'}</Card.Text>*/}
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </ul>
        </>
    )
}

export default AnimeSearch