import express from 'express'
import cors from 'cors'
import { removeFromCloud } from './cloudinaryConfig.js'

const app= express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000


app.delete('/post/:id',async (req,resp)=>{
        try {
            const {id}=req.params
            removeFromCloud(id)
            resp.json({msg:'Sikeres törlés!'})
        } catch (error) {
            console.log(error);
            
        }
})

app.listen(port,()=>console.log(`app lisenting on port : ${port}`)
)