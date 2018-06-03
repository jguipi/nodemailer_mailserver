'use strict';
var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'jguipii@gmail.com',
        pass: 'Juste12309'
    },
    tls: { rejectUnauthorized: false }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

router.post('/', function (req, res, next) {

    var sendmailreq = "<html>\n\
                        <body>\n\
                        <p> Name: " +  req.param('name') + "</p>\n\
                        <p> Email: " +  req.param('email') + "</p>\n\
                        <p> Message: " +  req.param('msg') + "</p>\n\
                        </body>\n\
                        </html>";
    var sendmailrevemail = "<html>\n\
                        <body>\n\
                        <h1>Question venant de Killo.ca</h1>\n\
                        <p> Name: " +  req.param('name') + "</p>\n\
                        <p> Email: " +  req.param('email') + "</p>\n\
                        <p> Message: " +  req.param('msg') + "</p>\n\
                       </body>\n\
                       </html>";

    var sender_email = req.param('email');

    let mailOptions = {
        from: 'Killo user',
        to: 'juste_g@hotmail.com',
        subject: "a new query arrived from " +  req.param('email') + "",
        html: sendmailreq
    };

    let mailreverse = {
        from: 'Question de Killo <username@domain.com>',
        to: sender_email,
        subject: "Question venant de Killo",
        html: sendmailrevemail
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });


    transporter.sendMail(mailreverse, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.status(200).send()
});

module.exports = router;
