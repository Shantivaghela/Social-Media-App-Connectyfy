const nodeMailer = require('nodemailer');
const { Otp_template } = require('./email_template');

const sendMailer = async (email, subject, message) => {
    const transpoter = nodeMailer.createTransport({

        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.E_PASSWORD

        }
    })

    await transpoter.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject,
        text: message,
        html: Otp_template(message),
    });
    transpoter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Mail error:", err);
        } else {
            console.log("Mail sent:", info);
        }
    });

}


module.exports = sendMailer;