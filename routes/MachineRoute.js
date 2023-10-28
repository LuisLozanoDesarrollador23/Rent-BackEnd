import { Router } from 'express'
import { getMachines, getMachine, createMachine, updateMachine, deleteMachine } from '../controllers/MachineController.js'

const router = Router()

router.get('/', getMachines)
router.get('/:id', getMachine)
router.post('/', createMachine)
router.put('/:id', updateMachine)
router.delete('/:id', deleteMachine)

export default router