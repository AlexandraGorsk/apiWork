import * as apiPosts from '../../api/getPosts';

export const SET_POSTS = 'SET_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

export const SetPostsRequest = (posts) => ({
	type: SET_POSTS,
	payload: posts,
});
export const deletePostRequest = (id) => ({
	type: DELETE_POST,
	payload: id,
});
export const createPostRequest = (data) => ({
	type: CREATE_POST,
	payload: data,
});

export const getPosts = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => dispatch(SetPostsRequest(json)));
	};
};

export const deletePost = (id) => {
	return (dispatch) => {
		apiPosts.deletePost(id).then(() => dispatch(deletePostRequest(id)));
	};
};
export const addPost = (data) => {
	return (dispatch) => {
		apiPosts.createPost(data).then(() => dispatch(createPostRequest(data)));
	};
};
/*
export const fetchPosts = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => dispatch(SetPostsRequest(json)));
	};
}; */
