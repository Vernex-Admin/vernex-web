// @ts-nocheck

import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message, services } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vernex Website" <${process.env.MAIL_USER}>`,
      to: "vernex.main@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Selected Services:</b></p>
        <ul>
          ${(services || []).map((s) => `<li>${s}</li>`).join("")}
        </ul>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
