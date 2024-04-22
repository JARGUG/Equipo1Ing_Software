const express = require ('express')
const cors = require ('cors')
const authRoutes = require ('./routes/authRoutes')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT,()=>{
    console.log(`Server running in: ${PORT}`)
})