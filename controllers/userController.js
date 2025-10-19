import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//login user
const loginUser = async(req, res) => {
    
    const {email, password} = req.body;

   
        const user = await userModel.findOne({email});

        if (!user) {
            res.json({success:false, message:"User doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.json({success:false, message:"Invalid Credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true, token});

   

}

//create tokden
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRETE);
}


// register user
const registerUser = async(req, res) => {
    const { name, email, password } = req.body;
   

        // Checking is user already exist or not
        const exists = await userModel.findOne({email});

        if(exists){
            res.json({success:false, message:"User Already Exist"})
        }

        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success:true, token});

   

}

export { loginUser, registerUser }