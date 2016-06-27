var moment = require('moment');
'use strict';

module.exports = function(app) {
	// Landing Page
    app.get('/', function(req, res) {
    	var title = "Timestamp Microservice";
        res.render('index', {title: title});
    });

    // Process route variable
    app.get('/:date', function(req, res) {
      var unixtime = null, 
          natural = null;
    	var date = req.params.date;
      if (isNaN(date)){
          // Natural date
          if (moment(date,"MMMM DD YYYY").isValid()) {
             unixtime = moment(date,'MMMM DD YYYY').unix();        
             natural = date;
          }
      } else {
          // Unix time
          unixtime = parseInt(date);
          natural = moment(unixtime*1000).format('MMMM DD YYYY');
      } 
   		obj = {"unixtime":unixtime, "natural":natural};
   		res.json(obj);

    });
};