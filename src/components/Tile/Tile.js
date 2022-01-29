import React from 'react';
import { Col } from 'react-bootstrap';

//Styles
import './Tile.scss';

const Tile = ({title, poster,year}) => {
    return <Col>
        <img src={poster} alt="" />
        <h4>{title}</h4>
        <p>{year}</p>
    </Col>;
};

export default Tile;
