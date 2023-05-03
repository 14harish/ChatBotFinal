'use strict'
const cors=require('cors');
const express=require('express');

const exp=express();
const body_parser=require('body-parser');
exp.use(body_parser.urlencoded({extended:true}));
// exp.use(bodyParser.json());
exp.use(express.json());
exp.use(cors())



const {NlpManager}=require('node-nlp'); 
const manage = new NlpManager({ languages: ['en'], forceNER: true });

//Json fetching
// var fs=require('fs');
// var x={};
// fs.readFile("data.json","utf-8",(err,res)=>{
//     x=JSON.parse(res);
    // console.log(x);

// console.log(x[0].Question);
// console.log(x[0].Answer);
//Questtion
manage.addDocument('en','hello','Next.greet');
manage.addDocument('en','hi','Next.greet');
manage.addDocument('en','heii','Next.greet');

manage.addDocument('en','what is fees structure','Next.fees');
manage.addDocument('en','About fees Structure','Next.fees');

manage.addDocument('en','About Cse department fees Struture','Next.cseFee');
manage.addDocument('en','What is Cse fees Struture Department','Next.cseFee');
manage.addDocument('en','Tell about cse fees Structure','Next.cseFee');

// manage.addDocument('en','About Ece fees Struture','Next.EceFee');
// manage.addDocument('en','What is Cse fees Struture Department','Next.EceFee');
// manage.addDocument('en','Tell about ece fees Structure','Next.EceFee');

manage.addDocument('en','Thank you for Information','Next.Thank');
manage.addDocument('en','Bye see you later','Next.Thank');


manage.addAnswer('en','Next.greet',"Welcome How Can I help you");
manage.addAnswer('en','Next.fees','74K');
manage.addAnswer('en','Next.cseFee','1.2L');
manage.addAnswer('en','Next.EceFee',"90K");
manage.addAnswer('en','Next.Thank',"Pleasure Any Other Queries");



exp.post("/in",async(req,res)=>{
    // res.send("ok");
    let text =req.body.text;
    await manage.train();
    manage.save();
    const response = await manage.process('en', text);
    // console.log(response);
    // console.log(response.answer);
    text=response.answer;
    console.log(text);
    // let wel="welcon";
    res.send({text});
    // console.log("hello");
})




exp.listen(8002,(req,res)=>{
    console.log("connnectedddd.");
    
})