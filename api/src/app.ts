import express  from "express";
import config from "./config";
import router from "./Router/videos";
import morgan from "morgan";
import cors from 'cors'
const app=express()

app.set('port',config.PORT || 3000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

export default app;