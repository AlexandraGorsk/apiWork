import { createStore, combineReducers, applyMiddleware } from 'redux';
import { postsReducer } from './Posts/posts.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({ posts: postsReducer });
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
