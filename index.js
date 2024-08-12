require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`nodemailerProject is listening at ${port}`);  
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user:  process.env.MAIL_USERNAME,
      //   pass:  process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret:  process.env.OAUTH_CLIENT_SECRET,
      refreshToken:  process.env.OAUTH_REFRESH_TOKEN
    }
});
console.log(process.env.MAIL_USERNAME)
console.log(process.env.OAUTH_CLIENTID)
console.log(process.env.OAUTH_CLIENT_SECRET)

  let mailOptions = {
    from:  process.env.MAIL_USERNAME,
    to: 'mazharaliburirom@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log(`Email sent successfully ${data.response}`);
    }
  });