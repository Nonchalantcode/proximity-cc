/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Modal from 'react-modal'
import Post from './Post'

Modal.setAppElement('#root')

const PostModal = ({ post }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<div className="post-modal">
			<span className="modal-trigger" onClick={openModal}>
                View Post
			</span>
			<Modal 
				isOpen={isOpen} 
				onRequestClose={closeModal}
			>
				<button 
					className="close-trigger" 
					onClick={closeModal}
				>
                    X
				</button>
				<Post post={post} />
			</Modal>
		</div>
	)
}

export default PostModal