import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    // Strict Validation Logic
    if (!fullName || fullName.trim().length < 3) {
      return NextResponse.json(
        { error: "Full name must be at least 3 characters long" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (min 10 digits)" },
        { status: 400 }
      );
    }

    if (!subject) {
      return NextResponse.json(
        { error: "Please select an inquiry subject" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER_EMAIL || "contactus@ardncloudsolutions.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
            `,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #121c27;">New Contact Form Submission</h2>
  <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
    </tr>
  </table>
  <h3 style="color: #121c27; margin-top: 20px;">Message:</h3>
  <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #121c27;">
    ${message.replace(/\n/g, "<br>")}
  </div>
</div>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
