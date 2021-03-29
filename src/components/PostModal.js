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
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <button 
                    className="close-trigger" 
                    style={{
                        position: 'absolute',
                        right: '10px',
                        color: '#000',
                        border: 'initial',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
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