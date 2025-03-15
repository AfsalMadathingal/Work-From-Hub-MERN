"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create a transporter
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail', // or use another email service
    auth: {
        user: process.env.OTP_EMAIL, // your email address
        pass: process.env.OTP_EMAIL_PASS, // your email password
    },
});
// Define a function to send emails
const sendEmail = async (to, text, subject, html) => {
    const mailOptions = {
        from: process.env.OTP_EMAIL,
        to,
        subject: "OTP VERIFICATION WFH",
        text,
        html, // Optional: you can send HTML content
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info.response;
    }
    catch (error) {
        console.error('Error sending email: ', error);
        return null;
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=emailService.js.map