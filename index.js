const express=require("express")
const app=express()
require("dotenv").config()
app.use(express.json())
const {client} = require("./redis.js")


app.post("/:key",async(req,res)=>{
    const key=req.params.key
    const msg=req.body.msg
    client.set(key,msg,(err,reply)=>{
        if(err){
            console.error(err)
            res.status(500).json({error:"Server error"})
        }else{
            res.status(200).send({
             msg:"Message sended succesfully"
            })
        }
    })
//     if(msg){
//     res.status(200).send("Message Sent Successfully")
// }else{
//     res.send("Please add some message")
// }
})
app.get("/:key",(req,res)=>{
    const key=req.params.key
    // const msg=await client.get("message")
    // console.log(msg)
    // res.status(200).send(msg)
    client.get(key,(err,reply)=>{
        if(err){
            console.error(err)
            res.status(500).json({error:"Server error"})  
        }else if(!reply){
            res.status(404).json({ error: 'Key not found' });
          
        }else{
            res.status(200).send({"message":reply})
        }
    })
})

app.listen(4000,()=>{
    console.log("Listening on port number 4000")
})

