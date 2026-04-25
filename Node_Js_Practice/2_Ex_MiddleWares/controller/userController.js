const service = require('../service/userService');

exports.getAllUsers = async (req , res )=>{
    try{
    const result = await service.getAllUser();
    res.json(result);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.getUsers = async (req , res , next)=>{
    try{
    const result = await service.getUsers();
    res.json(result);
    }
    catch(err){
        next(err);
    }
}

exports.updateUser = async(req , res)=>{
    try{
    const result = await service.updateUser(req.params , req.body);
    res.send("Successfully updated");
    }
    catch(err){
        res.status(500).json({"message" : err.message});
    }
}