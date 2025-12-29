import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await resend.emails.send({
      from: "VOID Contact <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      subject: `New VOID Contact from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Make sure status is 200
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend Error:", error);

    // Status 500 for errors
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
