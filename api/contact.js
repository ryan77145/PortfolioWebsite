const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://www.ryanshill.com");
    res.setHeader("Access-Control-Allow-Methods", "POST");

  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { name, number, emailfield, checkbox, comments } = req.body;

  if (!name || !number || !emailfield) {
    return res.status(400).send("Field cannot be empty");
  }

  await transporter.sendMail({
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: "Contact Form Submission From Personal",
    text: `
    Name: ${name}
    Email: ${emailfield}
    Phone: ${number}
    Preferred Method: ${checkbox}
    Comments: ${comments}`
  });

  res.send("Form Submitted Successfully! I will reach out soon");
};