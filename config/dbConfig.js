const mongoose=require('mongoose');
const config={
    connect:()=>{
        mongoose.connect(process.env.DB_URL).then(()=>{
            console.log('Connected to DB');

        }).catch((error)=>{
            console.log('error rised',error);
        })
    }
}
module.exports=config;