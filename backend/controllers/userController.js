import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import validator from 'validator'

//Creation de token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//Route pour l'authentification
const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        
        if(!user){
            return res.json({success: false, message: "User doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = createToken(user._id);
            res.json({success: true, token});
        }
        else{
            res.json({success: false, message: "Invalid credentials"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Route pour l'inscription
const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        
        //Regarder si l'utilisateur existe déjà ou non
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: "User already exists"});
        }

        //Vérifier si l'email est valide et aussi si le mot de passe est fort
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"});
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"});
        }

        //Hasher le mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Créer le nouvel utilisateur
        const newUser = new userModel({
            name, 
            email, 
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({success: true, token});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Route pour l'authentification de l'admin
const adminLogin = async (req,res) => {
    try {
        const {email, password} = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, token});
        }
        else{
            res.json({success: false, message: "Invalid credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {loginUser, registerUser, adminLogin}