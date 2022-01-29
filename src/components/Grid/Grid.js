import React from 'react';
// imports 
import Tile from '../Tile/Tile';
import { Row, Button, Col } from 'react-bootstrap';
//Styles
import './Grid.scss';


const Grid = ({ data, setData, alphabetSort, yearSort }) => {
	return (
		<>
			<Row className='mb-5'>
				<Col className='cta-button-wrapper'>
					<Button onClick={() => { setData([...alphabetSort(data)]) }} variant="outline-success">Sort by Alphabet</Button>
				</Col>
				<Col className='cta-button-wrapper'>
					<Button onClick={() => { setData([...yearSort(data)]) }} variant="outline-success">Sort by Year</Button>
				</Col>
			</Row>
			<Row className='movie-listings'>
				{data.map((movie, index) => { return <Tile key={index} title={movie.Title} poster={movie.Poster} year={movie.Year} /> })}
			</Row>
		</>
	);
};

export default Grid;
