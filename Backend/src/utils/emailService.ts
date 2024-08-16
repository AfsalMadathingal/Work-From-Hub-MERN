import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use another email service
  auth: {
    user: process.env.OTP_EMAIL, // your email address
    pass:process.env.OTP_EMAIL_PASS, // your email password
  },
});

// Define a function to send emails
export const sendEmail = async (to: string,text: string, subject?: string ,  html?: string) => {
  const mailOptions = {
    from: process.env.OTP_EMAIL,
    to,
    subject:"OTP VERIFICATION WFH",
    text,
    html, // Optional: you can send HTML content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info.response
  } catch (error) {
    console.error('Error sending email: ', error);
    return null
  }
};
