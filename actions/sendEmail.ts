"use server";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)){
        return {
            error: "Invalid message"
        }
    }
   await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: 'matus.kociann@gmail.com',
        subject: "Hello from Resend",
        reply_to: senderEmail as string,
        text: message as string
    })
  };