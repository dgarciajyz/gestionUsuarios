'use strict';


/**
 * Devuelve
 * Creacion de nuevos usuarios.
 *
 * username String Nomber de usuario
 * password String Password del usuario
 * returns String
 **/
module.exports.inicioSesionUsuarios = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for inicioSesionUsuarios'
    });
};


/**
 * Cierre de sesion
 * Cierra la sesion abierta por el usuario actual
 *
 * returns String
 **/
module.exports.logoutUsuario = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for logoutUsuario'
    });
};


/**
 * Registra un nuevo usuario
 * Creacion de nuevos usuarios.
 *
 * usuario Usuario 
 * returns String
 **/
module.exports.registroUsuarios = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for registroUsuarios'
    });
};

