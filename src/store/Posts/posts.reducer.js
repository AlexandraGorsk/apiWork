import { SET_POSTS, DELETE_POST, CREATE_POST } from './posts.action';
import { v4 as uuidv4 } from 'uuid';
export const initialState = {
	posts: [],
};
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, posts: action.payload };
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};
		case CREATE_POST:
			return {
				...state,
				posts: state.posts.concat({ ...action.payload, id: uuidv4() }),
			};
		default:
			return state;
	}
};
