import Item  from '../models/Item.js';

const createItem = async (req, res) => {
    const ItemData = req.body
    

    const Item = new Item({
        name: ItemData.name,
        serial: ItemData.serial,    
        price: ItemData.price        
    })

    try {
        await Item.save()

        res.status(201).json(Item)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getItem = async (req, res) => {
    const { id } = req.params

    try {
        const Item = Item.findById(id)

        if (Item) {
            res.json(Item)
        }

        res.status(404).json({ message: 'Item not found' })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getItems = async (req, res) => {
    try {
        const Items = await Item.find()

        res.json(Items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateItem = async (req, res) => {
    const { id } = req.params    
    const ItemData = req.body

    try {

        const Item = Item.findById(id)

        if (Item) {
            Item.name= ItemData.name,
            Item.serial= ItemData.serial,    
            Item.price= ItemData.price        

            await Item.save()

            res.json(Item)
        }

        res.status(404).json({ message: 'Item not found' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params

    try {
        const Item = Item.findById(id)

        if (Item) {

            await Item.remove()

            res.json({ message: 'Item removed' })
        }

        res.status(404).json({ message: 'Item not found' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { createItem, getItem, getItems, updateItem, deleteItem }