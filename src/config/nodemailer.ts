import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const fromEmail = process.env.FROM_EMAIL || "";
const sendEmail = process.env.TO_EMAIL || "";
const pass = process.env.EMAIL_PASS || "";

export const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: fromEmail,
    pass: pass,
  },
});

export const mailOptions = {
  from: fromEmail,
  to: sendEmail,
};
