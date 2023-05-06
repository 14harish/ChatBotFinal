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
manage.addDocument('en','Bye see you later byee','Next.Thank');

//cse fees detail
manage.addDocument('en','About Cse department fees Struture','Next.Fees');
manage.addDocument('en','What is Cse fees Struture Department','Next.Fees');
manage.addDocument('en','Tell about cse fees Structure','Next.Fees');
manage.addDocument('en','Tell about cse fees details fess fee detail','Next.Fees');
manage.addDocument('en','Fees fee','Next.Fees');
manage.addDocument('en','what is the year fees','Next.Fees');


//placement related questions
manage.addDocument('en','how many placed students','Next.placementStd');
manage.addDocument('en','placement history','Next.placementStd');
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
manage.addDocument('en','what is highest salary','Next.package');


manage.addDocument('en','what are top company visited company','Next.company');
manage.addDocument('en','what are the company is visited','Next.company');
manage.addDocument('en','say top company visited','Next.company');

manage.addDocument('en','Which year most No of student placed','Next.highYear');
manage.addDocument('en','In which year most of the student placed and what is the count','Next.highYear');

manage.addDocument('en','what was the average salary','Next.AveragePackage');
manage.addDocument('en','Average package for the placed student','Next.AveragePackage');
//Year Fees 
manage.addDocument('en','first year I year 1st year 1 st year fees','Next.first');
// manage.addDocument('en','1st year','Next.first');
manage.addDocument('en','second year II year 2nd year 2 nd year fees','Next.second');
// manage.addDocument('en','2nd year','Next.second');
manage.addDocument('en','third year III year 3rd year 3 rd year fees','Next.third');
// manage.addDocument('en','3rd year','Next.third');
manage.addDocument('en','fourth year IV year 4th year 4 th year fees','Next.fourth');
// manage.addDocument('en','4th year','Next.fourth');


//common queries
manage.addDocument('en','college minimum required cutoff','Next.cutoff');
manage.addDocument('en','what is college cutoff required','Next.cutoff');

manage.addDocument('en','what are the need of details for joining college','Next.detailCol');
manage.addDocument('en','Detail needs for college joining','Next.detailCol');
manage.addDocument('en','What are document needed','Next.detailCol');

manage.addDocument('en','Total no of working days in college','Next.workingDay');
manage.addDocument('en','how many workig days in the week','Next.workingDay');

manage.addDocument('en','what is college name','Next.clname');
manage.addDocument('en','Name of the college','Next.clname');

manage.addDocument('en','Is it phone is allowed to college','Next.phonecl');
manage.addDocument('en','mobile is allowed in the college','Next.phonecl');

//dress code 
manage.addDocument('en','What is dress code','Next.dress');
manage.addDocument('en','dress code of the college','Next.dress');

//hostel fees
manage.addDocument('en','what about hostel fees','Next.hostelfees');
manage.addDocument('en','hostel fees details','Next.hostelfees');

//Buss fees
manage.addDocument('en','there any bus fees','Next.Busfees');
manage.addDocument('en','what about bus fees','Next.Busfees');

//counsiling number
manage.addDocument('en','what is counselling number','Next.counsilingNo');
manage.addDocument('en','what is counselling code','Next.counsilingNo');
manage.addDocument('en','college counselling Number','Next.counsilingNo');
manage.addDocument('en','college code of counselling ','Next.counsilingNo');

//sports quota
manage.addDocument('en','There is sports quota','Next.sportQuota');
manage.addDocument('en','what about sports quota','Next.sportQuota');

//firstGradutaion
manage.addDocument('en','First graduation detail','Next.firstGraduation');
manage.addDocument('en','About First Graduation ','Next.firstGraduation');

//college timing
manage.addDocument('en','College Timeing','Next.CollegeTime');
manage.addDocument('en','What about college duration','Next.CollegeTime');

//period duration
manage.addDocument('en','period duration','Next.PeridDur');
manage.addDocument('en','period timing class timing class duration','Next.PeridDur');
manage.addDocument('en','how many periods are in the one day','Next.PeridDur');
manage.addDocument('en','In one day how many periods','Next.PeriodDur');

//lab facility
manage.addDocument('en','What about lab facility','Next.labFac');
manage.addDocument('en','Lab facilities laboratory facility','Next.labFac');
manage.addDocument('en','How many system available in the lab','Next.labsystem');
manage.addDocument('en','System availability of the laboratory lab','Next.labsystem');

//classroom
manage.addDocument('en','How many classroom are provided','Next.classFac');

//hod sir
manage.addDocument('en','HOD name','Next.HOD');
manage.addDocument('en','name of head of the department','Next.HOD');
manage.addDocument('en','Name of hod sir','Next.HOD');

//semester
manage.addDocument('en','How many semester available','Next.sem');
manage.addDocument('en','totally how many semester','Next.sem');
manage.addDocument('en','what is semester fees','Next.semfees');
manage.addDocument('en','How much is semester fees','Next.semfees');

manage.addDocument('en','who created this chatbot website','Next.creater');

//staff
manage.addDocument('en','how many staff are in the college','Next.staff');
manage.addDocument('en','staff available in the department','Next.staff');
manage.addDocument('en','is the staff are trained','Next.staffdet');
manage.addDocument('en','What about staff','Next.staffdet');
manage.addDocument('en','What about proffsessors','Next.staffdet');

//Answers---------------------------------------------------------------------------------

manage.addAnswer('en','Next.staff',"There is 29 staff available https://ksrce.ac.in/index.php/page?id=135&item=113"); 
manage.addAnswer('en','Next.staffdet',"Staff are company trained and certified staffs"); 
manage.addAnswer('en','Next.labsystem',"There is two Lab for CSE and there is more than 100+ systems available"); 
manage.addAnswer('en','Next.sem',"8 Semester"); 
manage.addAnswer('en','Next.sem',"*Harish V *Barath S *Hariharan M"); 
manage.addAnswer('en','Next.semfees',"Half of the year fees");

manage.addAnswer('en','Next.HOD',"Dr. A. Rajiv Kannan"); 
manage.addAnswer('en','Next.classFac',"There is total 8 classroom available for Ist year to IV the year"); 

manage.addAnswer('en','Next.highYear',"In 2016 Highest placement were done 127 Student were placed"); 
manage.addAnswer('en','Next.AveragePackage',"Average package is 4.2 LPA"); 

manage.addAnswer('en','Next.greet',"Welcome How Can I help you"); //greet
manage.addAnswer('en','Next.Thank',"Pleasure Any Other Queries"); //greet

//Placement Batch
manage.addAnswer('en','Next.placementStd',"Mention the Batch or the year");
manage.addAnswer('en','Next.vistedCom',"50+ company as visited");
manage.addAnswer('en','Next.package',"7.2 LPA");
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

manage.addAnswer('en','Next.first',"1.25 Lakhs first year(current)");
manage.addAnswer('en','Next.second',"77 thousand second year(current)");
manage.addAnswer('en','Next.third',"77 thousand for third year (current)");
manage.addAnswer('en','Next.fourth',"77 thousand for fourth year (current)");

//common queries
manage.addAnswer('en','Next.cutoff',"140 Cutoff required for joining cse for TNEA couceling");
manage.addAnswer('en','Next.detailCol',"*12th and 10th MarkSheet *Birth and comunity Certificate *Allotment seat(Counsiling)");
manage.addAnswer('en','Next.hostelfees',"68 thousand for an year (current)");
manage.addAnswer('en','Next.Busfees',"There No Bus Fees");
manage.addAnswer('en','Next.counsilingNo',"Counselling Number is : 2613");

manage.addAnswer('en','Next.sportQuota',"Yes There Sport Quota and Has fees deduction");

manage.addAnswer('en','Next.firstGraduation',"Yes There will be 27500 deduction in fees");

manage.addAnswer('en','Next.CollegeTime',"9AM to 4PM");

manage.addAnswer('en','Next.PeridDur',"There is 8 period and 45 minutes duration");

manage.addAnswer('en','Next.workingDay',"There is 5 days Working day Monday->Friday");

manage.addAnswer('en','Next.clname',"K.S.R College of Engineering");

manage.addAnswer('en','Next.dress',"Formal dress");

manage.addAnswer('en','Next.phonecl',"Phone will be collected by Rep and distribute after college timing");

manage.addAnswer('en','Next.labFac',"Lab will be provided for the subject wise");



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