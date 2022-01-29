import React, { useRef } from 'react';
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

const Header = ({ setSearch }) => {
	const searchRef = useRef();

	return (
		<Navbar variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand className="header-title" href="#">
					Flix
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll></Nav>
					<Form className="d-flex">
						<FormControl
							ref={searchRef}
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button
							onClick={() => {
								searchRef.current.value.length >= 3
									? setSearch(searchRef.current.value)
									: window.alert(
											'Too many results! Please write more characters',
									  );
							}}
							variant="outline-success">
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
