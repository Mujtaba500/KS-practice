import nodemailer from "nodemailer";

const password = process.env.EMAIL_APP_PASSWORD;

const emailController = {
  sendEmail: (req, res) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mujtabafaisal500@gmail.com",
        pass: password,
      },
    });
    const { recipent, subject, text } = req.body;
    const mailOptions = {
      from: "mujtabafaisal500@gmail.com",
      to: `${recipent}`,
      subject: `${subject}`,
      text: `${text}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({
          message: "Error in sending email",
        });
      } else {
        console.log("Email sent: ", info.response);
        res.json({
          message: "Email sent successfully",
        });
      }
    });
  },
};

export default emailController;
