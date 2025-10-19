import express from 'express';
import cors from 'cors'
import 'dotenv/config';
import { connectDB } from './config/dbConnect.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



// app config
const app = express();
const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(cors({
  origin: ["https://tomatofront.netlify.app", "https://tomatofrontadmin.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
})

// app.use((err, req, res, next) => {
//     console.log(err);
//     // let {success, message="Something went wrong"} = err;
//     res.json({success:false, message:"Error"});
// });

app.use((err, req, res, next) => {
    console.error(err.stack); // for debugging

    // const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.json({success: false, message});
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);

})