import { getGroups, getGroup, createGroup, deleteGroup } from '../models/group.js'

const fetchGroups = async (req, res) => {
    try {
        const groups = await getGroups()

        const updatedGroups = groups.map(group => { // go through all groups
            if (group.groupImage) { // if row contains an image
                const groupImageData = group.groupImage.toString('hex', 0, 4).toUpperCase(); // getting metadata from image
                if (groupImageData.startsWith('FFD8')) { // Is JPG image file
                    const base64Image = `data:image/jpeg;base64,${group.groupImage.toString('base64')}`; // change image to base64 type
                    return { ...group, groupImage: base64Image }; // update image for the group
                } else if (groupImageData.includes('89504E47')) { // Is PNG image file
                    const base64Image = `data:image/png;base64,${group.groupImage.toString('base64')}`; // change image to base64 type
                    return { ...group, groupImage: base64Image }; // update image for the group
                }
            }
            return group; // if groupImage is not defined, return group data as is
        });

        console.log(groups);

        return res.status(200).json(updatedGroups);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const fetchGroup = async(req, res) => {
    const { groupId } = req.params;
    try {
        const group = await getGroup(groupId);
        
        if (group.groupImage) { // if image exists
            const groupImageData = group.groupImage.toString('hex', 0, 4).toUpperCase(); // getting metadata from image
            if (groupImageData.startsWith('FFD8')) { // Is JPEG image file
                const base64Image = `data:image/jpeg;base64,${group.groupImage.toString('base64')}`; // change image to base64 type
                group.groupImage = base64Image; // update image for the group
            } else if (groupImageData.startsWith('89504E47')) { // Is PNG image file
                const base64Image = `data:image/png;base64,${group.groupImage.toString('base64')}`; // change image to base64 type
                group.groupImage = base64Image; // update image for the group
            }
        }

        return res.status(200).json(group)
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const addGroup = async(req,res) => {
    const { groupName, groupDescription, groupImage, owner } = req.body
    try {
        const groupImageData = Buffer.from(groupImage.replace(/^data:image\/\w+;base64,/, ""), 'base64'); // save binary of groupImage to groupImageData
        const groupId = await createGroup(groupName, groupDescription, groupImageData, owner)
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
