import ContactUsTemplate from "@/components/EmailTemplates/ContactUsTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullName, email, phone, subject, message } =await request.json();
  
  try {
    const { data, error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      from: "info@levelservices.biz",
      to: ["devlevelslimited@gmail.com","info@levelservices.biz"],
      // to: ["gitoshmbae@gmail.com"],
      // to: ["info@levelservices.biz"],
      bcc:["gitoshmbae@gmail.com"],
      subject: "New Contact Inquiry",
      react: ContactUsTemplate({
        fullName: `${fullName}`,
        email: `${email}`,
        phone: `${phone}`,
        subject: `${subject}`,
        message: `${message}`,
      }),
    });
    if (error) {
      console.error("Error sending email:", error);
      return new Response("Failed to send email", { status: 500 });
    }
    if (data) {
      console.log("Email sent successfully:", data);
      return new Response("Email sent successfully", { status: 200 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
