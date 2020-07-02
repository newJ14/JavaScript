const { validationResult } = require('express-validator');

module.exports = {
  handleErrors(templateFunc, dataCb) {
    return async (req, res, next) => {
      const errors = validationResult(req);
      
      if (!errors.isEmpty()) {
        
        let data = {};
        //to prevent the system from spreading out undefined 
        if (dataCb){
          data = await dataCb(req);
        }
        console.log(data)
        return res.send(templateFunc({ errors, ...data }));
        //... data => take whatever keys and values inside the data object and merge it with the existing one 
      }

      next();
    };
  },
  requireAuth(req, res, next) {
    if (!req.session.userId) {
      return res.redirect('/signin');
    }

    next();
  }
};
