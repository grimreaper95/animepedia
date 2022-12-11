import { Card, Row, Col, Container } from "react-bootstrap";
import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = (
    {
        rev
    }) => {

    const renderIcon = () => <FontAwesomeIcon
        icon={faStar}
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);

    return (
        <>
            {rev &&
                <Card className="shadow p-0 mb-5 bg-white rounded">
                    <Card.Img src={rev.animeImage} />
                    <Card.Body>

                        <a href={'http://localhost:3000/detail/' + rev.animeId} >
                            <Card.Title>{rev.animeTitle}</Card.Title>
                        </a>
                        <hr />
                        <Card.Text>{rev.review}</Card.Text>
                        <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {renderIcons(rev.rating)}
                        </div>
                    </Card.Body>
                </Card>


            }
        </>
    );
}

export default ReviewItem;