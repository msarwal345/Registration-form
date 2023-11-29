const mongoose =require("mongoose")

const uri="mongodb+srv://mani:gearfive@cluster0.kxdqrri.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Database Connected'))
.catch(()=>console.log('Error'));


const newSchema=new mongoose.Schema({
    email:{type:String,reuired:true},
    password:{type:String,required:true}
})

const collection =mongoose.model("collection",newSchema)

module.exports=collection