import { IContactForm } from "components/contact/components";
import { SITE_INFO } from "const";
import { post } from ".";
import { BrevoEmailPayload, BrevoResponse } from "../../api";

const sendContactEmail = async (data: IContactForm) => {
  const { email } = SITE_INFO;
  const htmlContent = `
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Mensaje:</strong><br/>${data.message}</p>
  `;
  const payload: BrevoEmailPayload = {
    htmlContent,
    sender: {
      email,
      name: 'Lusho',
      website: data.website
    },
    subject: 'Message from Lusho App',
    to: [{ email }]
  }
  
  return await post<BrevoResponse, BrevoEmailPayload>(
    '/api/send-email',
    payload
  );
}

export const mailingService = {
  sendContactEmail
};
