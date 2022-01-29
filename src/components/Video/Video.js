import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

//styles
import './Video.scss';

const Video = ({ data }) => {
    if (data[0] === undefined ) {
        return <h2>loading...</h2>
    } else {
        return <Container className = 'video-container'>
            <Row>
                <Col className = 'text-center'>
                    <h4>Continue Watching</h4>
                    <img src={data[0].Poster} alt="" />
                </Col>
                <Col>
                    <h4>ORIGINAL</h4>
                    <h2>{data[0].Title}</h2>
                    <Rating />
                    <p>lorem ipsum Amet anim aliqua cupidatat voluptate magna velit fugiat commodo. Velit duis dolore ut minim. Laborum tempor in amet cillum mollit in exercitation.</p>
                    <Button variant="outline-success">Watch Now</Button>
                </Col>
            </Row>
        </Container>
    }
};

export default Video;
