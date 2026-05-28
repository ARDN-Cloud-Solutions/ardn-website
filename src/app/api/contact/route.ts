import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interests?: string[];
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, phone, company } = body;
    const interests = Array.isArray(body.interests) ? body.interests : [];

    if (!name || name.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter your full name" },
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

    const phoneDigits = (phone || "").replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (min 10 digits)" },
        { status: 400 }
      );
    }

    if (!company || company.trim().length < 1) {
      return NextResponse.json(
        { error: "Please enter your company name" },
        { status: 400 }
      );
    }

    const interestsLine = interests.length > 0 ? interests.join(", ") : "—";
    const subjectLine =
      interests.length > 0
        ? `New strategy-call request: ${interests.join(", ")}`
        : "New strategy-call request";

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
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to:
        process.env.CONTACT_RECEIVER_EMAIL ||
        "contactus@ardncloudsolutions.com",
      subject: subjectLine,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Interests: ${interestsLine}
            `,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #121c27;">New Strategy-Call Request</h2>
  <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
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
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Interests</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${interestsLine}</td>
    </tr>
  </table>
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
