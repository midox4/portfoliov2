const nodemailer = require('nodemailer')

module.exports = async (userEmail , subject, htmlTemplate)=>{
    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth:{
                user: process.env.APP_EMAIL_ADDRESS,// sender
                pass:process.env.APP_EMAIL_PASSWORD //app password

            }
        })
const mailOptions = {
    from:"ahmedohafsi@gmail.com",// sender
    to:userEmail,
    subject :subject,
    html: htmlTemplate,
}
const info = await transporter.sendMail(mailOptions)
console.log(("Email Sent : " + info.response ))

    } catch (error) {
        console.log(error)
        throw new Error('internal server error nodemailer')
        
    }
}