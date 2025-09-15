import mongoose from 'mongoose';

const connectionDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true});
        console.log('Database connected successfully')
    } catch(error) {
        console.log('Error while connecting to the database', error);
    }
}

export default connectionDB;