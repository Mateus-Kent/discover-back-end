// express é uma biblioteca para criar servidor
const express = require('express');

const routes = express.Router(); // cria rotas

const views = `${__dirname}/views/`; // __dirname é o diretorio central

const Profile = {
  data: {
    name: 'Mateus Kent',
    avatar: 'https://github.com/Mateus-Kent.png',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 3,
    'value-hour': 75
  },

  controllers: {
    index(req, res) {
     return res.render(`${views}profile`, { profile: Profile.data })
    },

    update(req, res) {
     // req body para pegar os dados
     // quantas semanas tem no ano 
     // remover as semanas de férias do ano 
     // quantas horas por semana estou trabalhando 
     // total de horas trabalhadas no mes 


    }

  }
}



const Job = {
  data: [
    [
      {
        id: 1,
        name: 'Pizzaria Guloso',
        'daily-hours': 2,
        'total-hours': 1,
        createdAt: Date.now(),
      },
      {
        id: 2,
        name: 'OneTwo Project',
        'daily-hours': 3,
        'total-hours': 47,
        createdAt: Date.now(),
      },
    ]
  ],
  
  controllers: {
    index(req, res) {
    
        const updateJobs = Job.data.map((job) => {
          // ajustes no job
      
          const remaining = Job.services.remainingDays(job)
          const status = remaining <= 0 ? "done" : "progress"
         
          return {
            ...job,
            remaining,
            status,
            budget: Profile.data['value-hour'] * job['total-hours']
          }
        })
      
        return res.render(`${views}index`, { jobs: updateJobs });
  
    },

    create(req, res){
     return res.render(`${views}job`)
    },
       
    save(req, res) {

      const lastId = Job.data[Job.data.length - 1] ?.id || 1;

      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        createdAt: Date.now(), // atribuindo data de hoje
    
      });
    
      return res.redirect('/'); 

    }

  },
  services: {
    remainingDays(job){

      // calculo de tempo restante
      const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();
    
      const createdDate = new Date(job.createdAt);
      const dueDay = createdDate.getDate() + Number(remainingDays);
      const dueDateInMs = createdDate.setDate(dueDay);
    
      const timeDiffInMs = dueDateInMs - Date.now();
      // transformar milisegundos em dias 
      const dayInMs  = 1000 * 60 * 60 * 24
      const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
      // restam X dias
      return dayDiff
    }
    
  }
}


routes.get('/', Job.controllers.index);

routes.get('/job',  Job.controllers.create);

routes.post('/job', Job.controllers.save);

routes.get('/job/edit', (req, res) => res.render(`${views}job-edit`));

routes.get('/profile', Profile.controllers.index);

routes.post('/profile', Profile.controllers.update);

module.exports = routes;
