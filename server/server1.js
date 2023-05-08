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
// manage.addDocument('en','hello hi heii','Next.greet'); //greeting
// manage.addDocument('en','Thank you see you later bye byee','Next.Thank'); //greeting
// manage.addDocument('en','fees cse fee','Next.Fees'); //cse fees
// manage.addDocument('en','placed student','Next.placementStd'); //placement student
// manage.addDocument('en','company visited count','Next.vistedCom'); //company visited count
// manage.addDocument('en','highest package salary','Next.package'); //highest salary
// manage.addDocument('en','company visited','Next.dout'); //simple company visited
// manage.addDocument('en','top company visited list','Next.company');//top company visited
// manage.addDocument('en','most no number student placed student highest placed year','Next.highYear');
// manage.addDocument('en','average package salary','Next.AveragePackage'); //average salary
// manage.addDocument('en','college cutoff ','Next.cutoff'); //cutoff required
// manage.addDocument('en','Document needed joining','Next.detailCol'); //document neededs
// manage.addDocument('en','working days','Next.workingDay'); //working days
// manage.addDocument('en','college name','Next.clname'); //college name
// manage.addDocument('en','phone allowed','Next.phonecl');//phone detail
// manage.addDocument('en','dress code','Next.dress'); // dress code
// manage.addDocument('en','hostel fees fee','Next.hostelfees'); //hostel fees
// manage.addDocument('en','fees fee','Next.fee'); //verum fee
// manage.addDocument('en','bus fees','Next.Busfees');//bus fees
// manage.addDocument('en','counselling  number  code counsiling','Next.counsilingNo'); //counsiling name
// manage.addDocument('en','sports quota','Next.sportQuota');//sports quota
// manage.addDocument('en','College timing duration','Next.CollegeTime');//college timing
// manage.addDocument('en','first graduation','Next.firstGraduation');//first graduation
// manage.addDocument('en','period timing class timing class duration','Next.PeridDur'); //period duration
// manage.addDocument('en','lab labaratory facility','Next.labFac'); //lab faclities
// manage.addDocument('en','System available','Next.labsystem');//lab system
// manage.addDocument('en','class room classroom provided available','Next.classFac');//class room available
// manage.addDocument('en','HOD name','Next.HOD');//hod name
// manage.addDocument('en','Semester available count sem','Next.sem');//semester available
// manage.addDocument('en','semester fees sem','Next.semfees');//sem fees
// manage.addDocument('en','chatbot creater owner','Next.creater');//creater or owner
// manage.addDocument('en','staff detail proffesor detail','Next.staffdet');// staff detail
// manage.addDocument('en','staff available count proffesor','Next.staff'); // staff count


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
// //Year Fees 
manage.addDocument('en','first year I year 1st year 1 st year fees','Next.first');
manage.addDocument('en','second year II year 2nd year 2 nd year fees','Next.second');
manage.addDocument('en','third year III year 3rd year 3 rd year fees','Next.third');
manage.addDocument('en','fourth year IV year 4th year 4 th year fees','Next.fourth');

//Answers---------------------------------------------------------------------------------

// manage.addAnswer('en','Next.staff',"There is 29 staff available https://ksrce.ac.in/index.php/page?id=135&item=113"); 
// manage.addAnswer('en','Next.fee',"mention which fees"); 
// manage.addAnswer('en','Next.staffdet',"Staff are company trained and certified staffs"); 
// manage.addAnswer('en','Next.labsystem',"There is two Lab for CSE and there is more than 100+ systems available"); 
// manage.addAnswer('en','Next.creater',"*Harish V *Barath S *Hariharan M"); 
// manage.addAnswer('en','Next.sem',"8 Semester available 2 sem per Year"); 
// manage.addAnswer('en','Next.semfees',"Half of the year fees");

// manage.addAnswer('en','Next.HOD',"Dr. A. Rajiv Kannan"); 
// manage.addAnswer('en','Next.classFac',"There is total 8 classroom available for Ist year to IV the year"); 

// manage.addAnswer('en','Next.highYear',"In 2016 Highest placement were done 127 Student were placed"); 
// manage.addAnswer('en','Next.AveragePackage',"Average package is 4.2 LPA"); 

// manage.addAnswer('en','Next.greet',"Welcome How Can I help you"); //greet
// manage.addAnswer('en','Next.Thank',"Pleasure Any Other Queries"); //greet

// //Placement Batch
// manage.addAnswer('en','Next.placementStd',"Mention the Batch or the year");
// manage.addAnswer('en','Next.dout',"count or list");
// manage.addAnswer('en','Next.vistedCom',"50+ company as visited");
// manage.addAnswer('en','Next.package',"7.2 LPA");
// manage.addAnswer('en','Next.company',"*ZOHO *Coding Mart *TCS *virtusa etc....");
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
// manage.addAnswer('en','Next.Fees',"Mention the Year");

manage.addAnswer('en','Next.first',"1.25 Lakhs first year(current)");
manage.addAnswer('en','Next.second',"77 thousand second year(current)");
manage.addAnswer('en','Next.third',"77 thousand for third year (current)");
manage.addAnswer('en','Next.fourth',"77 thousand for fourth year (current)");

//common queries
// manage.addAnswer('en','Next.cutoff',"140 Cutoff required for joining cse for TNEA couceling");
// manage.addAnswer('en','Next.detailCol',"*12th and 10th MarkSheet *Birth and comunity Certificate *Allotment seat(Counsiling)");
// manage.addAnswer('en','Next.hostelfees',"68 thousand for an year (current)");
// manage.addAnswer('en','Next.Busfees',"There No Bus Fees");
// manage.addAnswer('en','Next.counsilingNo',"Counselling Number is : 2613");

// manage.addAnswer('en','Next.sportQuota',"Yes There Sport Quota and Has fees deduction");

// manage.addAnswer('en','Next.firstGraduation',"Yes There will be 27500 deduction in fees");

// manage.addAnswer('en','Next.CollegeTime',"9AM to 4PM");

// manage.addAnswer('en','Next.PeridDur',"There is 8 period and 45 minutes duration");

// manage.addAnswer('en','Next.workingDay',"There is 5 days Working day Monday->Friday");

// manage.addAnswer('en','Next.clname',"K.S.R College of Engineering");

// manage.addAnswer('en','Next.dress',"Formal dress");

// manage.addAnswer('en','Next.phonecl',"Phone will be collected by Rep and distribute after college timing");

// manage.addAnswer('en','Next.labFac',"Lab will be provided for the subject wise");



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