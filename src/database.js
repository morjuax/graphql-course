import mongoose from 'mongoose';

export const connectMongoDB = async () => {
    const url = 'mongodb://localhost/mongodbgraphql';

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('>>>> DB is connected');
    } catch(e) {
        console.log('Someting  goes wrong!');
        console.log(e);
    }

};

