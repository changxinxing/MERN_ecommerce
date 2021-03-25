const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email, subject, contents) => {
  try {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'min761471@gmail.com',
            pass: 'wiplajcpiyjqrwym' 
        },
    });

    const options  = {
        from: 'min761471@gmail.com',
        to: email,
        subject: subject,
        text: "Your New Password is : " + contents,
    };

    transporter.sendMail(options, (error, info) => {
      if (error) {
        return error;
      } else {
        // return res.status(200).json({
        //   success: true,
        // });
        console.log("Email sent correctly!");
      }
    });
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;