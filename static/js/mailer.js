const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'tema_921@mail.ru',
        pass: 'ghjvbc87014043942',
    }
}, {
    from: "Toyyot slam data <tema_921@mail.ru>",
})


const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log("Email sent", info)
    })
}

module.exports = mailer;