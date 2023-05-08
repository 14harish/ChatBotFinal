'use strict'
const dataContent = require('./data.json');
const express=require('express');
const exp=express();
const cors=require('cors');
const body_parser=require('body-parser');
exp.use(body_parser.urlencoded({extended:true}));
exp.use(express.json());
exp.use(cors());

const {NlpManager}=require('node-nlp'); 
const manage = new NlpManager({ languages: ['en'], forceNER: true });

dataContent.data.map(x=>{
    manage.addDocument('en',x.keyword,x.key);
    manage.addAnswer('en',x.key,x.Answer);
})



exp.post("/in",async(req,res)=>{
let text =req.body.text;
    await manage.train();
    manage.save();
    const response = await manage.process('en', text);
    console.log(response);
    text=response.answer;
    if(response.answer==undefined){
        text="Contact No:902839292 \n Contact for More details";
    }
    res.send({text});
})

exp.listen(8002,(req,res)=>{
    console.log("connnectedddd.");  
})