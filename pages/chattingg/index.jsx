"use client"
import React, { useState } from 'react';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/chat.module.css";

const ChatButton = () => {

    const [open, setOpen] = useState(false);

    const toggleChat = () => {
        setOpen(!open);
    };


    return (
        <div className="container">
            <div className={styles.chatting}>
                <button className={styles.chatbbutton} onClick={toggleChat}>
                <IoChatbubbleEllipsesSharp />

                </button>

                {open && (
                    <div className={styles.box}>
                        <textarea placeholder="...متن خود را وارد کنید" className={styles.textarea}></textarea>
                        <button className={styles.send}>ارسال</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatButton;
