const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sachinfulsunge@nimapinfotech.com",
        pass: "Sachinfulsunge123!!"
    },
})

const options = {
    from: "sachinfulsunge@nimapinfotech.com",
    to: "sachinfulsunge1@gmail.com",
    subject: "Sending with node",
    text: "Mail sent successfully using node."
}

transporter.sendMail(options, (err, info) => {
    if (err){
        console.log(err);
        return 
    }
    console.log(info.response);
})
