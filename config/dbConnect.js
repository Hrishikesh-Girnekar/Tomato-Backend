import mongoose from "mongoose";

const dburl = process.env.DBURL;

export const connectDB = async () => {
    await mongoose.connect(dburl)
        .then(() => console.log("DB Connected"));
}


