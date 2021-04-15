//express é uma biblioteca para criar servidor 
const express = require("express");

const routes = express.Router()   //cria rotas

const views = __dirname + "/views/"  //__dirname é o diretorio central 

const profile = {
    name: "Mateus Kent" ,
    avatar: "https://avatars.githubusercontent.com/u/65130546?v=4" ,
    "monthly-budget": 3000 ,
    "days-per-week": 5 ,
    "hours-per-day": 5 ,
    "vacation-per-year": 3 ,
}

routes.get('/' , (req, res) => res.render( views + 'index'))
routes.get('/job' , (req, res) => res.render(views +  'job'))
routes.get('/job/edit' , (req, res) => res.render( views + 'job-edit'))
routes.get('/profile' , (req, res) => res.render( views + 'profile', {profile: profile}))

module.exports = routes;