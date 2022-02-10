import axios from 'axios';
export const getPosts = async () => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	return data;
};
export const createPost = async (body) => {
	const { data } = await axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		body
	);
	return data;
};
export const deletePost = async (id) => {
	const { data } = await axios.delete(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return data;
};
