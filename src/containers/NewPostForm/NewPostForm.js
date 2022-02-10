import React from 'react';
import { Stack, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/Posts';

const NewPostForm = ({ initial }) => {
	const dispatch = useDispatch();
	const { values, handleChange, handleSubmit, handleReset } = useFormik({
		initialValues: initial ?? {
			title: '',
			body: '',
		},
		onSubmit: (data) => {
			console.log(data);
			dispatch(addPost(data));
			handleReset();
		},
	});
	return (
		<form onSubmit={handleSubmit}>
			<Stack direction='column' spacing={2} mt={2} padding={4}>
				<Typography variant='h5' textAlign='center'>
					Create your new post
				</Typography>
				<TextField
					label='Title'
					id='title'
					name='title'
					value={values.title}
					onChange={handleChange}
				/>
				<TextField
					label='Body'
					id='body'
					name='body'
					value={values.body}
					onChange={handleChange}
				/>

				<Button variant='outlined' type='submit'>
					Save
				</Button>
			</Stack>
		</form>
	);
};

export default NewPostForm;
