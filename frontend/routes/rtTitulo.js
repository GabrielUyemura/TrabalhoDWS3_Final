var express = require('express');
var router = express.Router();
var tituloApp = require("../apps/titulo/controller/ctlTitulo")



//Função necessária para evitar que usuários não autenticados acessem o sistema.
function authenticationMiddleware(req, res, next) {
    // Verificar se existe uma sessão válida.
    isLogged = req.session.isLogged;    
  
    if (!isLogged) {      
      res.redirect("/Login");
    }
    next();
}; 
  
/* GET métodos */
router.get('/manutTitulo', authenticationMiddleware, tituloApp.manutTitulo)
router.get('/insertTitulo', authenticationMiddleware, tituloApp.insertTitulo);
router.get('/viewTitulo/:id', authenticationMiddleware, tituloApp.viewTitulo);
router.get('/updateTitulo/:id', authenticationMiddleware, tituloApp.updateTitulo);

/* POST métodos */
router.post('/insertTitulo', authenticationMiddleware, tituloApp.insertTitulo);
router.post('/updateTitulo', authenticationMiddleware, tituloApp.updateTitulo);
router.post('/deleteTitulo', authenticationMiddleware, tituloApp.deleteTitulo);

module.exports = router;