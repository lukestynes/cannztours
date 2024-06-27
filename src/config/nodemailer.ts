import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const email = process.env.EMAIL || "";
const pass = process.env.EMAIL_PASS || "";

export const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
