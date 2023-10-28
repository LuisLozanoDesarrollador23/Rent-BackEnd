import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://user1234:user1234@empresariales.k2mdbza.mongodb.net/?retryWrites=true&w=majority')

        console.log('MongoDB connected')
    } catch (err) {
        console.error(err.message)
    }
}