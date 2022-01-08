const express=require('express');
const cors=require('cors');
const body_parser=require('body-parser');
const app=express();
 //middle wares
app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
//importing routes
const admin=require('./routes/admin');
const hod=require('./routes/hod');
const teacher=require('./routes/teacher');
//
//routes
app.get('/',(req,res)=>{
    console.log("requested");
    res.send("<h3>Hello from server :)</h3>");
})

app.use("/admin",admin);
app.use("/hod",hod);
app.use("/teacher",teacher);

app.use('/static',express.static('uploads'));
 

app.listen(4000,()=>{
console.log('server Running on 4000...');
})