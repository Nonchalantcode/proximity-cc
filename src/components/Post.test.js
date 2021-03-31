import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import postsReducer from '../reducers/postsReducer'
import commentsReducer from '../reducers/commentsReducer'
import Post from './Post'

const reducers = combineReducers({
	comments: commentsReducer,
	posts: postsReducer
})

const store = createStore(reducers, {
	comments: {
		1: [
			{
				body: 'comment 1',
				email: 'test@email.com',
				name: 'Joe',
			}
		]
	},
	posts: [
		{
			body: 'Hello world',
			id: 1,
			title: 'Testing components'
		}	
	]
})

test('A post is rendered correctly together with its comments', () => {

	const state = store.getState()
	const post = state.posts[0]
	const comments = state.comments

	const component = render(
		<Provider store={store}>
			<Post post={post} />
		</Provider>
	)

	const container = component.container
	const postTitle = container.querySelector('.user-post .post-heading h1')
	const postContent = container.querySelector('.user-post .post-body p')
	const commentAuthor = container.querySelector('.comments-section .user-comment .author')
	const commentContent = container.querySelector('.comments-section .user-comment .content')
	
	expect(postTitle).toHaveTextContent(post.title)
	expect(postContent).toHaveTextContent(post.body)
	expect(commentAuthor).toHaveTextContent(
		comments[post.id][0].email
	)
	expect(commentContent).toHaveTextContent(
		comments[post.id][0].body
	)
})

test('A comment can be submitted inside a post', () => {
	const state = store.getState()
	const post = state.posts[0]
	const comments = state.comments[post.id]
	const initialComments = comments.length

	const component = render(
		<Provider store={store}>
			<Post post={post} />
		</Provider>
	)

	const messageInput = component.container.querySelector('.comment-form textarea')
	const form = component.container.querySelector('.comment-form')
	const newCommentText = 'Hello, there! This is a new comment'

	fireEvent.change(messageInput, {
		target: { value: newCommentText }
	})
	fireEvent.submit(form)

	/* Store should have for an additional comment for this post now */
	const newStoreState = store.getState()
	expect(newStoreState['comments'][post.id]).toHaveLength(initialComments + 1)

	/* New comment should have the text in the 'newCommentText' variable */
	expect(newStoreState['comments'][post.id][0]['body']).toBe(newCommentText)
})