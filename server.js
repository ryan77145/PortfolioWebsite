require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const expressApp = express();
expressApp.use(cors());


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

expressApp.use(express.urlencoded({ extended: true }));
expressApp.post("/contact", async (req, res) => {
    console.log(req.body);
    if (req.body.name === "" || req.body.name === null) {
      return res.status(400).send("Field cannot be empty");
    }
    if (req.body.number === "" || req.body.number === null) {
      return res.status(400).send("Field cannot be empty");
    }
    if (req.body.emailfield === "" || req.body.emailfield === null) {
      return res.status(400).send("Field cannot be empty");
    }
    await transporter.sendMail({
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: "Contact Form Submission",
    text: `
    Name: ${req.body.name}
    Email: ${req.body.emailfield}
    Phone: ${req.body.number}
    Preferred Method: ${req.body.checkbox}
    Comments: ${req.body.comments}`
})
    res.send('Form Submitted Successfully! We will reach out soon');
});

expressApp.listen(3000, () => {
  console.log("Server running on port 3000");
});

