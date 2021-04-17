//express é uma biblioteca para criar servidor 
const express = require("express");

const routes = express.Router()   //cria rotas

const views = __dirname + "/views/"  //__dirname é o diretorio central 

const profile = {
    name: "Mateus Kent" ,
    avatar: "https://github.com/Mateus-Kent.png" ,
    "monthly-budget": 3000 ,
    "days-per-week": 5 ,
    "hours-per-day": 5 ,
    "vacation-per-year": 3 ,
}

const jobs = [
    {
        id: 1 ,
        name: "Pizzaria Guloso" ,
        'daily-hours': 2 ,
        'total-hours': 60 ,
        createdAt: Date.now(),
    },
    {
        id: 2,
        name: "OneTwo Project" ,
        'daily-hours': 3 ,
        'total-hours': 47 ,
        createdAt: Date.now()
    }
]



routes.get('/' , (req, res) => {
      
    const updateJobs = jobs.map((job) => {
    //ajustes no job 
    //calculo de tempo restante 
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

       const createdDate = new Date(job.createdAt)    
       const dueDay = createdDate.getDate() + Number(remainingDays)
       const dueDate = createdDate.setDate()

        
    return job
    }) 

  
   return res.render( views + 'index' , {jobs})

})








routes.get('/job' , (req, res) => res.render(views +  'job'))

routes.post('/job' , (req, res) => {
const lasId = jobs[jobs.length - 1]?.id || 1;
 jobs.push({
     id: lastId,
     name: req.body.name,
     'daily-hours': req.body[daily-hours],
     'total-hours': req.body[total-hours],
     createdAt: Date.now() // atribuindo data de hoje 
 })   
 return res.redirect('/')
}) 

routes.get('/job/edit' , (req, res) => res.render( views + 'job-edit'))

routes.get('/profile' , (req, res) => res.render( views + 'profile', {profile: profile}))

module.exports = routes;