const userModel = require("../models/users.model");
const {hashSync, compareSync} = require('bcryptjs');

const signupController = async (req,res) => {
    try {
        const {email, password, firstname} = req.body
        if(!email || !password || !firstname){
            return res.status(400).json({msg: `empty Field(s). try again`})
        }
        const oldAccount = await userModel.findOne({email})
        if(oldAccount){
            return res.status(400).json({msg: `The email ${email} is already in use... try using another one`})
        }
        const hashPassword = hashSync(password, 10)
        const newUser = await userModel.create({
            firstname,
            email,
            password: hashPassword
        })
        res.status(201).json({msg: `Account Created Successfully`, newUser})
    } catch (error) {
        console.log(error.message)
    }
};


exports.loginController = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email})
    await compareSync(password, user.password)
}

module.exports = signupController