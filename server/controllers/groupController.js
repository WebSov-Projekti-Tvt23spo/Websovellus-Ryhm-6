import { getGroups, getGroup, createGroup, deleteGroup } from '../models/group.js'

const fetchGroups = async (req, res) => {
    try {
        const groups = await getGroups()
        return res.status(200).json(groups)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const fetchGroup = async(req, res) => {
    const { groupId } = req.params
    try {
        const group = await getGroup(groupId)
        return res.status(200).json(group)
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const addGroup = async(req,res) => {
    const { groupName, groupDescription, groupImage, owner } = req.body
    try {
        const groupId = await createGroup(groupName, groupDescription, groupImage, owner)
        return res.status(200).json({ id: groupId })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const removeGroup = async(req,res) => {
    const { id: groupId } = req.params;
    try {
        await deleteGroup(groupId)
        return res.status(200).json({ id: groupId })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export { fetchGroups, fetchGroup, addGroup, removeGroup };
