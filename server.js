const express=require('express');
const cors=require('cors');
const dotenv=require('env');
//env config
dotenv.config()

const app=express();
//midlewares
app.use(cors());
app.use(express.json());
 app.get('/',(req,res)=>
 {
    
 })


