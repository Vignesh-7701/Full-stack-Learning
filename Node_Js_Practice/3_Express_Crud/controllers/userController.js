const db = require('../config/db');

exports.getUsers = (req , res)=>{
    db.query('SELECT * FROM users' , (err , result)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.json(result);
    })
};

exports.createUser = (req , res)=>{
    const {name , email} = req.body;
    db.query('INSERT INTO users(name , email) VALUES(? , ?)' , [name , email] , (err , result)=>{
        if (err) return res.status(500).json(err);
      res.json({ message: 'User created', id: result.insertId });
    })
}

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  db.query(
    'UPDATE users SET name=?, email=? WHERE id=?',
    [name, email, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'User updated' });
    }
  );
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM users WHERE id=?',
    [id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'User deleted' });
    }
  );
};

