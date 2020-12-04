//NPM RUN DEV == Executa pelo nodemon

const port = 3003 //porta utilizada

const bodyParser = require('body-parser')  //Instanciando os modulos.
const express = require('express') 
const server = express() //instanciando servidor.
//const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended:true})) //setando bodyparser para interpretar (MIDDLEWARE)
server.use(bodyParser.json()) //se o conteudo for um JSON transforma em um OBJ para ser utilizado no backend
//server.use(allowCors)

server.use(function(req, res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept")
    next()
})

server.listen(port, function(){
    console.log(`Running the backend server on port ${port}.`) //Mostra quando server esta ouvindo e em qual porta.
})

module.exports = server



/* MIDDLEWARE de teste.

server.use(function(req,res,next){
    res.send('It works') // mostra se a requisicao funcionou !
    console.log('middleware test')
    next()
})

*/
