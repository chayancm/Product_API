require('dotenv').config()
require('express-async-errors');
const express=require('express')
const app=express();
const connectDB=require('./db/connect')
const notFoundMiddleware=require('./middleware/not-found')
const errorMiddleware=require('./middleware/error-handler')
app.use(express.json());

app.get('/',(req,res)=>{

    res.send('<h1> Store Api</h1><a href="/api/v1/products"> product route</a>')
})
const router=require('./routes/products')
app.use('/api/v1/products',router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port=process.env.PORT ||3000


const start=async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is lisening port${port}...`)
        })
    } catch(error){
        console.log(error);
    }
}
start();

