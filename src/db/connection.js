import mongoose from "mongoose"

const connection = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('connection success');
        
    }
    catch(err){
        console.log("connection fail" ,err);               
    };
};

export default connection
