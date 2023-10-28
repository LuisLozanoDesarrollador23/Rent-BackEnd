import Management from '../models/Management.js';

const createManagement = async (req, res) => {
    const ManagementData = req.body
    

    const Management = new Management({
        description: ManagementData.description,
        userCreator:{
            idType:RentData.userCreator.idType,
            idNumber:RentData.userCreator.idNumber,
            name:RentData.userCreator.name,
            phone:RentData.userCreator.phone,
            rol:RentData.userCreator.rol,
            municipality:RentData.userCreator.municipality,
            address:RentData.userCreator.address, 
        },
        invoiceId: ManagementData.invoiceId,    
        dateOfCreation: ManagementData.dateOfCreation,
        userClient:{
            idType:RentData.userCreator.idType,
            idNumber:RentData.userCreator.idNumber,
            name:RentData.userCreator.name,
            phone:RentData.userCreator.phone,
            rol:RentData.userCreator.rol,
            municipality:RentData.userCreator.municipality,
            address:RentData.userCreator.address, 
        }                
    })

    try {

        await Management.save()

        res.status(201).json(Management)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getManagement = async (req, res) => {
    const { id } = req.params

    try {
        const Management = Management.findById(id)

        if (Management) {
            res.json(Management)
        }

        res.status(404).json({ message: 'Management not found' })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getManagements = async (req, res) => {
    try {
        const Managements = await Management.find()

        res.json(Managements)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateManagement = async (req, res) => {
    const { id } = req.params    
    const ManagementData = req.body

    try {

        const Management = Management.findById(id)

        if (Management) {
            Management.idType=RentData.userCreator.idType,
            Management.idNumber=RentData.userCreator.idNumber,
            Management.name=RentData.userCreator.name,
            Management.phone=RentData.userCreator.phone,
            Management.rol=RentData.userCreator.rol,
            Management.municipality=RentData.userCreator.municipality,
            Management.address=RentData.userCreator.address, 

            await Management.save()

            res.json(Management)
        }

        res.status(404).json({ message: 'Management not found' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteManagement = async (req, res) => {
    const { id } = req.params

    try {
        const Management = Management.findById(id)

        if (Management) {

            await Management.remove()

            res.json({ message: 'Management removed' })
        }

        res.status(404).json({ message: 'Management not found' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { createManagement, getManagement, getManagements, updateManagement, deleteManagement }