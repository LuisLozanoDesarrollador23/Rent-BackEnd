import { Router } from 'express'
import { getManagements, getManagement, createManagement, updateManagement, deleteManagement } from '../controllers/ManagementController.js'

const router = Router()

router.get('/', getManagements)
router.get('/:id', getManagement)
router.post('/', createManagement)
router.put('/:id', updateManagement)
router.delete('/:id', deleteManagement)

export default router