"use server";
import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from "@/app/lib/schema";
import ContactFormEmailTemplate from "@/components/ContactFormEmailTemplate";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!fromEmail) {
      throw new Error(
        "RESEND_FROM_EMAIL is not defined in the environment variables."
      );
    }

    if (!toEmail) {
      throw new Error(
        "RESEND_TO_EMAIL is not defined in the environment variables."
      );
    }
    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: "Contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage ${message}`,
        react: ContactFormEmailTemplate({ name, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error?.format() };
  }
}
