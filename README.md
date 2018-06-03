# Express-nodemailer
Sending smtp mail with express api using nodemailer exemple base from https://github.com/samarmeena/express-nodemailer.git
Ready to be use on heroku


# Example

Use post method to send a mail

    var request = require("request");

    var options = { method: 'POST',
      url: 'https://mailerkillo.herokuapp.com/sendmail',
      qs: 
       { name: firstName,
         email: email,
         msg: note,
         newsletter: 'true' },
      headers: 
        { 
         'Cache-Control': 'no-cache' } 
        };
    
    request(options, function (error, response, body) {
      if (error){ 
        throw new Error(error)
      }
      if(response){
      }
    });

# Thank you
