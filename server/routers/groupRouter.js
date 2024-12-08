import { Router } from 'express'
import { fetchGroups, fetchGroup, addGroup, removeGroup } from '../controllers/groupController.js'
import { addMessage, fetchMessages } from '../controllers/messageController.js'

const router = Router()

router.get('/getGroups', fetchGroups)
router.get('/group/:groupId', fetchGroup)
router.post('/createGroups', addGroup)
router.post('/deleteGroup/:id', removeGroup)

router.post('/group/:groupId/message', addMessage)
router.get('/group/:groupId/messages', fetchMessages)

export default router;
