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

// manage.addDocument('en','what is fees structure','Next.fees');
// manage.addDocument('en','About fees Structure','Next.fees');

//cse fees detail
manage.addDocument('en','About Cse department fees Struture','Next.cseFee');
manage.addDocument('en','What is Cse fees Struture Department','Next.cseFee');

//fees details
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');

//placement related questions
manage.addDocument('en','how many placed students','Next.placementStd');
manage.addDocument('en','placement history','Next.placementStd');
manage.addDocument('en','history of placement','Next.placementStd');

//Placement Batch detail
manage.addDocument('en','2022 2023 Batch','Next.23B');
manage.addDocument('en','2023 batch','Next.23');
manage.addDocument('en','2021-2022 Batch','Next.22');
manage.addDocument('en','2020-2021 Batch','Next.21');
manage.addDocument('en','2019-2020 Batch','Next.20');
manage.addDocument('en','2018-2019 Batch','Next.19');
manage.addDocument('en','2017-2018 Batch','Next.18');
manage.addDocument('en','2016-2017 Batch','Next.17');
manage.addDocument('en','2015-2016 Batch','Next.16');
manage.addDocument('en','2014-2015 Batch','Next.15');
manage.addDocument('en','2013-2014 Batch','Next.14');
manage.addDocument('en','2012-2013 Batch','Next.13');


manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');

manage.addDocument('en','Thank you for Information','Next.Thank');
manage.addDocument('en','Bye see you later','Next.Thank');


manage.addAnswer('en','Next.greet',"Welcome How Can I help you");
manage.addAnswer('en','Next.cseFee',"1.2L");
manage.addAnswer('en','Next.Fees',"1.2L");
manage.addAnswer('en','Next.Thank',"Pleasure Any Other Queries");

manage.addAnswer('en','Next.placementStd',"Mention the Batch or the year");
//Placement Batch
manage.addAnswer('en','Next.23B',"63 placed For More Details:https://ksrce.ac.in/admin/file_manager/source/be-cse/Dept/Placement%20Details/2022-2023%20Placement%20details.pdf");
manage.addAnswer('en','Next.22',"72 placed");
manage.addAnswer('en','Next.21',"41 placed");
manage.addAnswer('en','Next.20',"56 placed");
manage.addAnswer('en','Next.19',"42");
manage.addAnswer('en','Next.18',"");
manage.addAnswer('en','Next.17',"13");
manage.addAnswer('en','Next.16',"13");
manage.addAnswer('en','Next.15',"13");
manage.addAnswer('en','Next.14',"13");
manage.addAnswer('en','Next.13',"13");


exp.post("/in",async(req,res)=>{
    // res.send("ok");
    let text =req.body.text;
    await manage.train();
    manage.save();
    const response = await manage.process('en', text);
    // console.log(response);
    // console.log(response.answer);
    console.log(response);
    text=response.answer;
    // let wel="welcon";
    res.send({text});
    // console.log("hello");
})




exp.listen(8002,(req,res)=>{
    console.log("connnectedddd.");
    
})