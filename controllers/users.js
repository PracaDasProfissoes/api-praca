const bcrypt = require('bcryptjs');
const async = require('async');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function generateToken(user){
    return jwt.sign({user}, config.secret,{
        expiresIn: 86400
    });
}

exports.verifyToken = async(req,res,next) => {
    const token = req.headers['authorization'];
    console.log('TOKEN',token);
    if(!token) return res.status(403).send({error:"Token não fornecido"});

    jwt.verify(token,config.secret, (err,decoded) => {
        let userDecoded = decoded.user;
        if(err) return res.status(403).send({error: 'Falha ao autenticar token'});

        else if(userDecoded.user.type === 'ADMIN'){
            if (req.body.type !== 'USER' && req.body.type !== 'SECRETARY') return res.status(403).send({error: "Não autorizado!"});
        }

        else if (userDecoded.user.type === 'USER'){
            if (req.body.type !== 'SECRETARY') return res.status(403).send({error: "Não autorizado!"});
        }

        else if (userDecoded.user.type === 'SECRETARY'){
            return res.status(403).send({error: 'Não autorizado!'});
        }

        next();
    });
}