import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import HomePage from './HomePage/HomePage';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';

const apikey = 'ef773fae';

const App = () => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('star');

	//Call API Function
	const getMovies = (search) => {
		let totalDataArray = [];
		const requests = [];

		for (var i = 0; i < 3; i++) {
			const baseURL = `http://www.omdbapi.com/?apikey=${apikey}&s=${search}&page=${i + 1}`;
			requests.push(
				axios.get(baseURL).then((res) => {
					totalDataArray.push(...res.data.Search);
				}),
			);
		}
		Promise.allSettled(requests)
			.then(() => {
				setData(totalDataArray)
			})
			.catch((err) => {
				console.log(`There was an error! ${err}`);
			});
	};

	//Sort Alphabetically Function
	const alphabetSort = (arr) => {
		arr.sort((a, b) => {
			if (a.Title < b.Title) {
				return -1;
			}
			if (a.Title > b.Title) {
				return 1;
			}
			return 0;
		});
		return arr;
	};

	//Sort by Number function
	const yearSort = (arr) => {
		arr.sort((a, b) => {
			let first = parseInt(a.Year, 10);
			let second = parseInt(b.Year, 10);
			return first - second;
		});
		return arr;
	};

	useEffect(() => {
		getMovies(search);
	}, [search]);

	return (
		<div className="App">
			{data === null || undefined ? (
				"It's Just Loading.... Stick Around!"
			) : (
				<>
					<HomePage
						data={data}
						setData={setData}
						alphabetSort={alphabetSort}
						yearSort={yearSort}
						search={search}
						setSearch={setSearch}
					/>
				</>
			)}
		</div>
	);
};

export default App;
