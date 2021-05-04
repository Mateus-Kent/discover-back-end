let data = {
      name: 'Mateus Kent',
      avatar: 'https://github.com/Mateus-Kent.png',
      'monthly-budget': 3000,
      'days-per-week': 5,
      'hours-per-day': 5,
      'vacation-per-year': 3,
      'value-hour': 75
    };

    module.exports = {
        get(){
          return data;
        },

        update(newData) {
            data = newData;
        }
    }