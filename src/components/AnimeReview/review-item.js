import { Card, Row, Col, Container } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = (
    {
        rev,
        user
    }) => {
    console.log('rev', rev)
    console.log('user', user)
    const renderIcon = () => <FontAwesomeIcon
        icon={faStar}
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);
    return (
        <>
            <Card className="shadow p-0 mb-5 bg-white rounded">
                <Card.Body>
                    <div className="row">
                        <div className="col-4">
                            <img className="rounded-circle" height={48} src={`/images/profile.jpg`} />
                        </div>
                        {user &&
                            <div className="col-8">
                                <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                <div>{user.username}</div>
                            </div>
                        }
                    </div>
                    <hr />
                    <Card.Text>{rev.review}</Card.Text>
                    <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {renderIcons(rev.rating)}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default ReviewItem;