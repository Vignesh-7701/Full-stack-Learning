const connection = require('../config/db');

exports.getAllUser = ()=>{
    return new Promise((resolve , reject)=>{
        connection.query('select * from users' , (err , results)=>{
            if(err){
                return reject(err);
            }
            resolve(results);
        })
    })
};


exports.getUsers = async()=>{
    try{
    const [result] = await connection.query(
        'select * from users');
        return result;
    }
    catch(err){
        return err;
    }
}

exports.updateUser = async({id} , {name , email})=>{
    try{
            const [results] = await connection.query('update users set name=? , email=? where id=? ',
                [name , email , id]
            )
            return results;
        }
        catch(err){
            console.error(err);
        }
        }