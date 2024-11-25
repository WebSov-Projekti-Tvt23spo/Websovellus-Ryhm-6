import React, { useState } from 'react'
import { addGroup, setImageBase64 } from '../helpers/groupData'
import { useNavigate } from 'react-router-dom'
import templateImage from './assets/template_image.jpg'

function CreateGroup() {
    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')
    const [groupImage, setGroupImage] = useState(templateImage)
    const navigate = useNavigate()

    const handleNameChange = (e) => {
        setGroupName(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setGroupDescription(e.target.value)
    };

    const handleImageChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const base64Image = await setImageBase64(e.target.files[0])
            setGroupImage(base64Image)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newGroup = { name: groupName, description: groupDescription, image: groupImage };
        addGroup(newGroup)
        setGroupName('')
        setGroupDescription('')
        setGroupImage(templateImage)
        navigate('/groupList')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Please enter your group name:</p>
                <input
                    type='text'
                    placeholder='Type here...'
                    value={groupName}
                    onChange={handleNameChange}
                />
                <p>Please add a description for your group:</p>
                <input
                    type='text'
                    placeholder='Type here...'
                    value={groupDescription}
                    onChange={handleDescriptionChange}
                />
                <p>Change group icon:</p>
                <input type="file" onChange={handleImageChange} />
                <button type='submit'>Create Group</button>
            </form>
        </div>
    );
}

export default CreateGroup;
