import React, { useState } from 'react';
import Header from "../helpers/Header";
import templateImage from './assets/template_image.jpg';
import '../styles/Group.css';

function Group() {

    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const [username, setUsername] = useState('testUser')
    const [image, setImage] = useState(templateImage)
    const [groupName, setGroupName] = useState('My group')

    const handleInputChange = (e) => {
        setCurrentMessage(e.target.value)
    }

    /* Create a new message object on submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentMessage.trim() !== '') {
            const newMessage = {
                username: username,
                text: currentMessage
            }
            setMessages([...messages, newMessage])
            setCurrentMessage('')
        }
    }

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleNameChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleNameSubmit = (e) => {
        e.preventDefault();
        // Change the name on the database later on
    }

    return (
        <div className='groupPage'>
            <Header />
            <h1>{groupName}</h1>
            <div className='mainContainer'>
                <figure>
                    <img src={image} />
                </figure>
                <div className='chatBoxContainer'>

                    {/* Create a new div element using a map to post a new message without removing the earlier ones */}
                    <div className='messageContainer'>
                        {messages.map((msg, index) => (
                            <div key={index} className='message'>
                                {msg.username}: {msg.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type='text'
                            placeholder='Type a message...'
                            className='chatBoxInput'
                            value={currentMessage}
                            onChange={handleInputChange} />
                        <button type='submit' className='sendButton'>Send</button>
                    </form>
                </div>
            </div>
            
            <div className='uploadContainer'>
                <p>Change group icon:</p>
                <input type="file" onChange={handleImageChange} />
                <p>Change group name:</p>
                <form onSubmit={handleNameSubmit}>
                    <input type='text' value={groupName} onChange={handleNameChange} />
                    <button type='submit' className='sendButton'>Change name</button>
                    </form>
            </div>
        </div>
    );
};

export default Group;