import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import {wrapAsync} from "../utils/wrapAsync.js";

const foodRouter = express.Router();

// Image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

foodRouter.post("/add", upload.single("image"), wrapAsync(addFood));
foodRouter.get("/list", wrapAsync(listFood));
foodRouter.post("/remove", wrapAsync(removeFood));





export default foodRouter;