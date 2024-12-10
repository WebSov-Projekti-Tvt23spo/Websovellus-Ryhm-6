import { Router } from 'express'
import { fetchGroups, fetchGroup, addGroup, removeGroup } from '../controllers/groupController.js'
import { addMessage, fetchMessages } from '../controllers/messageController.js'

const router = Router()

// Routing now sensible,
// base url is still localhost:3001/group, but unnecessary group prefixes cleaned up

router.get('/getGroups', fetchGroups)
router.get('/:groupId', fetchGroup)
router.post('/createGroups', addGroup)
router.post('/deleteGroup/:id', removeGroup)

router.post('/:groupId/message', addMessage)
router.get('/:groupId/messages', fetchMessages)

export default router;
