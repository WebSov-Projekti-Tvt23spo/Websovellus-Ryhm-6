import { createMessage, getMessages } from '../models/groupMessage.js'

const addMessage = async (req,res) => {
    const { groupId } = req.params
    const { username, text } = req.body
    try {
        const message = await createMessage(groupId, username, text)
        return res.status(200).json(message)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const fetchMessages = async (req,res) => {
    try {
        const { groupId } = req.params
        const messages = await getMessages(groupId)
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export { addMessage, fetchMessages };