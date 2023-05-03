'use strict'
const cors=require('cors');
const express=require('express');

const exp=express();
const body_parser=require('body-parser');
exp.use(body_parser.urlencoded({extended:true}));
exp.use(express.json());
exp.use(cors())

const {NlpManager}=require('node-nlp'); 
const manage = new NlpManager({ languages: ['en'], forceNER: true });


//questions-------------------------------------------------------------------------------------
manage.addDocument('en','hello','Next.greet');
manage.addDocument('en','hi','Next.greet');
manage.addDocument('en','heii','Next.greet');
manage.addDocument('en','Thank you for Information','Next.Thank');
manage.addDocument('en','Bye see you later','Next.Thank');

//cse fees detail
manage.addDocument('en','About Cse department fees Struture','Next.Fees');
manage.addDocument('en','What is Cse fees Struture Department','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees details fess fee detail','Next.Fees');


//placement related questions
manage.addDocument('en','how many placed students','Next.placementStd');
manage.addDocument('en','placement history','Next.placementStd');
manage.addDocument('en','history of placement','Next.placementStd');

manage.addDocument('en','history of placement','Next.placementStd');
//Placement Batch detail
manage.addDocument('en','2023 Batch','Next.23');
manage.addDocument('en','2022 Batch','Next.22');
manage.addDocument('en','2021 Batch','Next.21');
manage.addDocument('en','2020 Batch','Next.20');
manage.addDocument('en','2019 Batch','Next.19');
manage.addDocument('en','2018 Batch','Next.18');
manage.addDocument('en','2017 Batch','Next.17');
manage.addDocument('en','2016 Batch','Next.16');
manage.addDocument('en','2015 Batch','Next.15');
manage.addDocument('en','2014 Batch','Next.14');
manage.addDocument('en','2013 Batch','Next.13');

//company
manage.addDocument('en','how many company as visted','Next.vistedCom');
manage.addDocument('en','how much company visited the college','Next.vistedCom');

manage.addDocument('en','what was the highest package','Next.package');
manage.addDocument('en','which is highest package','Next.package');


manage.addDocument('en','what are top company visited company','Next.company');
manage.addDocument('en','what are the company is visited','Next.company');



//Year Fees 
manage.addDocument('en','first year I year 1st year 1 st year ','Next.first');
manage.addDocument('en','second year II year and 2nd year 2 nd year','Next.second');
manage.addDocument('en','third year III year 3rd year 3 rd year','Next.third');
manage.addDocument('en','third year IV year 4th year 4 th year','Next.fourth');



//Answers---------------------------------------------------------------------------------

manage.addAnswer('en','Next.greet',"Welcome How Can I help you"); //greet
manage.addAnswer('en','Next.Thank',"Pleasure Any Other Queries"); //greet

//Placement Batch
manage.addAnswer('en','Next.placementStd',"Mention the Batch or the year");
manage.addAnswer('en','Next.vistedCom',"50+ company as visited");
manage.addAnswer('en','Next.package',"7.2 Lakhs");
manage.addAnswer('en','Next.company',"*ZOHO *Coding Mart *TCS *virtusa etc....");
manage.addAnswer('en','Next.23',`63 placed`);
manage.addAnswer('en','Next.22',"72 placed");
manage.addAnswer('en','Next.21',"41 placed");
manage.addAnswer('en','Next.20',"56 placed");
manage.addAnswer('en','Next.19',"42 placed");
manage.addAnswer('en','Next.18',"56 placed");
manage.addAnswer('en','Next.17',"97 placed");
manage.addAnswer('en','Next.16',"127 placed");
manage.addAnswer('en','Next.15',"128 placed");
manage.addAnswer('en','Next.14',"79 placed");
manage.addAnswer('en','Next.13',"36 placed");

//fees detail
manage.addAnswer('en','Next.Fees',"Mention the Year");
manage.addAnswer('en','Next.first',"1.25 Lakhs (current)");
manage.addAnswer('en','Next.secound',"77 thousand (current)");
manage.addAnswer('en','Next.third',"77 thousand for third year (current)");
manage.addAnswer('en','Next.fourth',"77 thousand for third year (current)");

//

exp.post("/in",async(req,res)=>{
    let text =req.body.text;
    await manage.train();
    manage.save();
    const response = await manage.process('en', text);
    console.log(response);
    text=response.answer;
    res.send({text});
})

exp.listen(8002,(req,res)=>{
    console.log("connnectedddd.");
    
})