const User = require("../models/users");
const bcrypt = require("bcrypt");

const { validateRegisterForm } = require("../utils/validateRegisteration");
const { generateRefreshToken, generateAccessToken } = require("../utils/generateTokens");
const { Types } = require("mongoose");
const saltRounds = +process.env.ROUND_OF_SALTS;

const registerHandler = async (req, res,next) => {
  const { name, username, email, password } = req.body;
  const registerValidation = validateRegisterForm(req.body);
  if (!(registerValidation?.valid)) {
    return res.status(400).send({ type: registerValidation.error });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password,saltRounds);
    const user = new User({
      name,
      username,
      email,
      password: encryptedPassword,
    });

    const result = await user.save();
    res.status(201).send({newUser: result});
  } catch (error) {
    next(error);
  }
};

const loginHandler = async(req,res,next)=>{
    try {
        const {username,password} = req.body;
        const isExist =  await User.findOne({username});
        if(!isExist){
            return res.status(400).send({type: "No such username"});
        }
        
        const isPasswordCorrect = await bcrypt.compare(password,isExist.password);
        if(!isPasswordCorrect){
            return res.status(400).send({type: "Password Incorrect"});
        }
        const refreshToken = generateRefreshToken({id:isExist.id,name: isExist.name,passowrd: password});
        const accessToken  = generateAccessToken(isExist.id,refreshToken);
        isExist.refreshToken = refreshToken;

        await isExist.save();
        return res.status(200).send({token:accessToken, userId:isExist.id});
    } catch (error) {
        next(error);
    }
}


const accessTokenGeneratorHandler= async(req,res,next)=>{
    try {
        
        const userId = req.body.id;
        const id = new Types.ObjectId(userId);
        const user = await User.findById(id);
        if(!user.refreshToken){
            return res.status(403).send({type: "User Not authenticated yet."});
        }
        const token = generateAccessToken(userId,user.refreshToken);
        if(!token){
            user.refreshToken = "";
            await user.save();
            return res.sendStatus(401);
        }
        return res.status(201).send({userId,token})
    } catch (error) {
        if (error.name === "TokenExpiredError"){
            return res.status(401);
        }else{
            next(error);
        }
    }
}

module.exports = {
    registerHandler,
    loginHandler,
    accessTokenGeneratorHandler
}