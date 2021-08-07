const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const mongoose = require("mongoose");
const postModel = require("./schema");
// const postModel  = require("./schema")
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://shahzad:shyzi@cluster0.01j2w.mongodb.net/app",
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)


mongoose.connection.on("connected",()=>console.log("mongoose connected successfuly"));
mongoose.connection.on("error",()=>console.log("mongoose not connected"));



app.post("/add", (request,response)=>{
    try {
        const body = request.body
        postModel.create(body, (error,data)=>{
            if(error){
                throw error
            }else{
                response.send("created successfuly")
            }
        })
        
    } catch (error) {
        
    }
})


app.get("/find", (request,response)=>{
    try {
        const body = request.body
        postModel.find(body, (error,data)=>{
            if(error){
                throw error
            }else{
                response.send(data)
                response.send("success")
            }
        })
        
    } catch (error) {
        
    }
})



app.get("/delete", (request,response)=>{
    try {
        const body = request.body
        postModel.deleteMany(body, (error,data)=>{
            if(error){
                throw error
            }else{
                response.send(data)
                response.send("deleted successfuly")
            }
        })
        
    } catch (error) {
        
    }
})



app.listen(port, ()  =>console.log(`your server is running on localhost:${port}`));