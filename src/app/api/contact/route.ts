import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  interests?: string[];
  source?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, phone, company, message, source } = body;
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

    // Phone is optional (the low-friction quote form doesn't ask for it), but
    // if provided it must be a real number.
    const phoneDigits = (phone || "").replace(/\D/g, "");
    if (phone && phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (min 10 digits)" },
        { status: 400 }
      );
    }

    const interestsLine = interests.length > 0 ? interests.join(", ") : "—";
    const subjectLine = message
      ? `New scope & quote request${company ? ` — ${company}` : ""}`
      : interests.length > 0
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
Phone: ${phone || "—"}
Company: ${company || "—"}
Interests: ${interestsLine}
${message ? `\nProject / message:\n${message}\n` : ""}
Source: ${source || "Contact page"}
            `,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #121c27;">${message ? "New Scope &amp; Quote Request" : "New Strategy-Call Request"}</h2>
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
      <td style="padding: 10px; border: 1px solid #ddd;">${phone || "—"}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${company || "—"}</td>
    </tr>
    ${message ? `<tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Project</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/</g, "&lt;").replace(/\n/g, "<br>")}</td>
    </tr>` : ""}
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Interests</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${interestsLine}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Source</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${source || "Contact page"}</td>
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
