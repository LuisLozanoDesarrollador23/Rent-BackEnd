import User from '../models/User.js';

const createUser = async (req, res) => {
    const UserData = req.body
    

    const User = new User({
        idType: UserData.idType,
        idNumber: UserData.idNumber,    
        name: UserData.name,
        phone:UserData.phone,
        rol:UserData.rol,        
        state:UserData.state,
        municipality:UserData.municipality,
        address:UserData.address,        
    })

    try {
        await User.save()

        res.status(201).json(User)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getUser = async (req, res) => {
    const { id } = req.params

    try {
        const User = User.findById(id)

        if (User) {
            res.json(User)
        }

        res.status(404).json({ message: 'User not found' })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const Users = await User.find()

        res.json(Users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params    
    const UserData = req.body

    try {

        const User = User.findById(id)

        if (User) {
            User.idType = UserData.idType,
            User.idNumber= UserData.idNumber,    
            User.name= UserData.name,
            User.phone=UserData.phone,
            User.rol=UserData.rol,        
            User.state=UserData.state,
            User.municipality=UserData.municipality,
            User.address=UserData.address,        

            await User.save()

            res.json(User)
        }

        res.status(404).json({ message: 'User not found' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const User = User.findById(id)

        if (User) {

            await User.remove()

            res.json({ message: 'User removed' })
        }

        res.status(404).json({ message: 'User not found' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { createUser, getUser, getUsers, updateUser, deleteUser }