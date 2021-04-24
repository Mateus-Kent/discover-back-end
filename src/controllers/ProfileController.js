const Profile = require('../model/Profile');

module.exports = {
    index(req, res) {
     return res.render(`profile`, { profile: Profile.get() })
    },

    update(req, res) {
     // req body para pegar os dados
     const data = req.body;

     // quantas semanas tem no ano 
     const weeksPerYear = 52

     // remover as semanas de férias do ano , para pegar quantas semanas tem um mês
     weeksPerMonth = (weeksPerYear - data['vacation-per-year'] )/ 12

     // total de horas trabalhadas na semana 
     const weekTotalHours = data['hours-per-day'] * data['days-per-week']

     // total de horas trabalhadas no mes 
      const MonthlyTotalHours = weekTotalHours * weeksPerMonth

      // qual será o valor da minha hora 
      const valueHour = data['monthly-budget'] / MonthlyTotalHours 

      Profile.update({
        ...Profile.get(),
        ...req.body,
        "value-hour": valueHour
      }) 

      return res.redirect('/profile')

    }

  }