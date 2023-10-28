import  Rent from '../models/Rent.js';

const createRent = async (req, res) => {
    const RentData = req.body
    

    const rent = new Rent({
        dateOfCreation: RentData.dateOfCreation,
        consecutive: RentData.consecutive,    
        price: RentData.price,
        stock:RentData.stock,
        status:RentData.status,        
        characteristics:RentData.characteristics,
        management: [],
        userCreator:{
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
        await Rent.save()

        res.status(201).json(rent)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getRent = async (req, res) => {
    const { id } = req.params

    try {
        const Rent = Rent.findById(id)

        if (Rent) {
            res.json(Rent)
        }

        res.status(404).json({ message: 'Rent not found' })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getRents = async (req, res) => {
    try {
        const Rents = await Rent.find()

        res.json(Rents)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateRent = async (req, res) => {
    const { id } = req.params    
    const RentData = req.body

    try {

        const Rent = Rent.findById(id)

        if (Rent) {
            Rent.dateOfCreation= RentData.dateOfCreation,
            Rent.consecutive= RentData.consecutive,    
            Rent.price= RentData.price,
            Rent.stock=RentData.stock,
            Rent.status=RentData.status,        
            Rent.characteristics=RentData.characteristics,

            await Rent.save()

            res.json(Rent)
        }

        res.status(404).json({ message: 'Rent not found' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteRent = async (req, res) => {
    const { id } = req.params

    try {
        const Rent = Rent.findById(id)

        if (Rent) {

            await Rent.remove()

            res.json({ message: 'Rent removed' })
        }

        res.status(404).json({ message: 'Rent not found' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { createRent, getRent, getRents, updateRent, deleteRent }