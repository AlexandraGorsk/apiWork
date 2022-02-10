import React from 'react';
import {
	Card,
	Button,
	CardContent,
	Typography,
	CardActions,
} from '@mui/material';
import { deletePost } from '../../store/Posts';
import { useDispatch } from 'react-redux';

const Post = ({ id, title, body }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		console.log(id);
		dispatch(deletePost(id));
	};
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: 200,
			}}
		>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{body}
				</Typography>
			</CardContent>

			<CardActions>
				<Button variant='outlined' onClick={handleDelete}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
