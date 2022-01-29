import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import Grid from '../../components/Grid/Grid';
const HomePage = ({ data, setSearch, setData, alphabetSort, yearSort }) => {
	return (
		<Container fluid className="homepage">
			{data.length === 0 ? (
				<>
					<Header setSearch={setSearch} />
					<h1 className="p-5 text-center">Sorry, No Results for that!</h1>
				</>
			) : (
				<>
					<Header setSearch={setSearch} />
					<Video data={data} />
					<Grid
						data={data}
						setData={setData}
						alphabetSort={alphabetSort}
						yearSort={yearSort}
					/>
				</>
			)}
		</Container>
	);
};

export default HomePage;
