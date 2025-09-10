const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ayushsingh24958_db_user:yhc2R0yw4wdCU72A@cluster0.inyxdwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log("Database Connected Successfully")
}).catch(err=>{
   console.log("Something Error" , err)
})
