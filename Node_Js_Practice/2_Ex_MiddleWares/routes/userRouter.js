const express = require('express');
const router = express.Router();
const db = require('../config/db')
const controller = require('../controller/userController')

router.get('/1' , controller.getAllUsers);
router.get('/2' , controller.getUsers);

router.post('/' , async (req , res) =>{
    try{
    const {name , email} = req.body;
    const [results] = await db.query('insert into users (name , email) values (? , ?)' , 
        [name , email]);
        res.send(results);
    }
    catch(err){
        res.status(500).json({'message' : err.message});
    }
}) 

router.get('/user/:id' , async (req , res)=>{
    try{
    const {id} = req.params;
    const [result] = await db.query('select * from users where id=?',[id]);
    res.send(result[0]);
    }
    catch(err){
        res.status(500).json({"message" : err.message});
    }
})

router.put('/:id' , controller.updateUser)

router.delete('/:id' ,async (req , res)=>{
    try{
        const {id} = req.params;
        const [results] = await db.query('delete from users where id=?' , [id]);
        res.send("Deleted Successfully")
    }
    catch(err){
        res.status(500).json({'message' : err.message});
    }
})

module.exports = router;