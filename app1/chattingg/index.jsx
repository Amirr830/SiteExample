"use client"
import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa'; // آیکون چت
import './style.css';

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            <div className={`chat-box ${isOpen ? 'open' : 'closed'}`}>
                <div className="chat-header">
                    <h3>صفحه چت</h3>
                    <button className="close-btn" onClick={toggleChat}>X</button>
                </div>
                <div className="chat-content">
                    <textarea name="chat" id="1"></textarea>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <button type="button" className="btn btn-primary">ارسال</button>

                </div>
            </div>
            <button className="chat-button ml-9 mb-3" onClick={toggleChat}>
                <FaCommentDots size={24} />
            </button>
        </div>
    );
};

export default ChatButton;
