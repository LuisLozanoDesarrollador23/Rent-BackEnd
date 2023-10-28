import Machine  from '../models/Machine.js';


const createMachine = async (req, res) => {
    const machineData = req.body
    

    const machine = new Machine({
        name: machineData.name,
        serial: machineData.serial,    
        price: machineData.price,
        stock:machineData.stock,
        status:machineData.status,        
        characteristics:machineData.characteristics,
    })

    try {
        await Machine.save()

        res.status(201).json(machine)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getMachine = async (req, res) => {
    const { id } = req.params

    try {
        const machine = Machine.findById(id)

        if (machine) {
            res.json(machine)
        }

        res.status(404).json({ message: 'Machine not found' })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getMachines = async (req, res) => {
    try {
        const machines = await Machine.find()

        res.json(machines)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateMachine = async (req, res) => {
    const { id } = req.params    
    const machineData = req.body

    try {

        const machine = Machine.findById(id)

        if (machine) {
            machine.name= machineData.name,
            machine.serial= machineData.serial,    
            machine.price= machineData.price,
            machine.stock=machineData.stock,
            machine.status=machineData.status,        
            machine.characteristics=machineData.characteristics,

            await Machine.save()

            res.json(machine)
        }

        res.status(404).json({ message: 'machine not found' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteMachine = async (req, res) => {
    const { id } = req.params

    try {
        const machine = Machine.findById(id)

        if (machine) {

            await Machine.remove()

            res.json({ message: 'machine removed' })
        }

        res.status(404).json({ message: 'machine not found' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { createMachine, getMachine, getMachines, updateMachine, deleteMachine }