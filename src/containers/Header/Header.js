import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Button, Dialog } from '@mui/material';
import NewPostForm from '../NewPostForm';
const HeaderWrapper = styled('header')`
	height: 150px;
	border-bottom: 1px solid purple;
	padding: 10px;
`;
const Header = () => {
	const [open, toggle] = useReducer((prev) => !prev, false);

	return (
		<HeaderWrapper>
			<Button variant='outlined' color='secondary' onClick={toggle}>
				Create Post
			</Button>
			<Dialog open={open} onClose={toggle} fullWidth>
				<NewPostForm />
			</Dialog>
		</HeaderWrapper>
	);
};

export default Header;
