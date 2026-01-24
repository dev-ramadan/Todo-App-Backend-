import mongoose from "mongoose"

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connection success');
        
    }
    catch(err){
        console.log("connection fail" ,err);               
    };
};

export default connection
