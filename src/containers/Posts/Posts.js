import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, getSlice } from '../../store/Posts';
import styled from 'styled-components';
import Post from '../../components/Post';

const PostsWrapper = styled('div')`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	box-sizing: border-box;
	gap: 5px;
	justify-content: space-around;
`;
const Posts = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector(getSlice);
	useEffect(() => dispatch(getPosts()), [dispatch]);
	return (
		<PostsWrapper>
			{posts && posts?.map((post) => <Post key={post.id} {...post} />)}
		</PostsWrapper>
	);
};

export default Posts;
