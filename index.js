import express from 'express'
import { connectDb } from './db/db.js'
import itemRoutes from './routes/ItemRoute.js'
import machineRoutes from './routes/MachineRoute.js'
import ManagementRoute from './routes/ManagementRoute.js'
import rentRoutes from './routes/RentRoute.js'
import userRoutes from './routes/UserRoute.js'

const PORT = 3000
const app = express()
app.use(express.json())

app.use('/items', itemRoutes)
app.use('/machine', machineRoutes)
app.use('/management', ManagementRoute)
app.use('/rent', rentRoutes)
app.use('/user', userRoutes)

connectDb()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})