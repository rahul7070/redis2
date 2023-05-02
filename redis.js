const Redis=require("ioredis")
let configuration={
    host:"redis-16831.c74.us-east-1-4.ec2.cloud.redislabs.com",
    port:16831,
    username:"default",
    password:process.env.Redis_Password
}

//connecting with redis and creating new server
const client= new Redis(configuration)

module.exports={client}