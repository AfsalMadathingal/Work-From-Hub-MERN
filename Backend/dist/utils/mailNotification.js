"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMailNotification = async (email, subject, name, message) => {
    const transporter = nodemailer_1.default.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.OTP_EMAIL,
            pass: process.env.OTP_EMAIL_PASS,
        },
    });
    const CLIENT_HOST_URL = process.env.CLIENT_HOST_URL;
    const mailOptions = {
        from: process.env.OTP_EMAIL,
        to: email,
        subject: subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <!-- Header Section -->
            <div style="text-align: center; padding-bottom: 20px;">
              <img src="${CLIENT_HOST_URL}/logo.png" alt="Company Logo" style="max-width: 150px;">
              <h1 style="color: #ff6f00;">Work From Hub</h1>
            </div>
      
            <!-- Main Message -->
            <div style="padding: 20px; background-color: #fcefe7; border-radius: 5px;">
              <p style="font-size: 16px; color: #333;">
                Dear ${name},
              </p>
              <p style="font-size: 16px; color: #333;">
                ${message}
              </p>
              <p style="font-size: 16px; color: #333;">
                Feel free to reach out to us if you have any questions!
              </p>
              <p style="font-size: 16px; color: #333;">
                Best regards,<br>
                The WORK-FROM-HUB Team
              </p>
            </div>
      
            <!-- Footer Section -->
            <div style="text-align: center; padding-top: 20px; font-size: 12px; color: #888;">
              <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              <p><a href='${CLIENT_HOST_URL}' style="color: #ff6f00; text-decoration: none;">Visit our website</a></p>
            </div>
          </div>
        `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        }
        else {
            console.log('Email sent successfully:', info.response);
        }
    });
};
exports.default = sendMailNotification;
//# sourceMappingURL=mailNotification.js.map