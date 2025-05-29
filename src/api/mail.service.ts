import { post } from "api";
import { ContactType } from "components/contact/components";
import { SITE_INFO } from "const";

interface BrevoEmailPayload {
  sender: {
    name: string;
    email: string;
  };
  to: Array<{
    email: string;
    name?: string;
  }>;
  subject: string;
  htmlContent: string;
}

interface BrevoResponse {
  messageId: string;
}


const sendEmail = async (payload: BrevoEmailPayload) => {
  const brevoApiKey = import.meta.env.VITE_MAIL_API_KEY;
  const brevoApiUrl = 'https://api.brevo.com/v3/'; 
  return await post<BrevoResponse, BrevoEmailPayload>(
    `${brevoApiUrl}smtp/email`,
    payload,
    {
      'api-key': brevoApiKey,
    }
  );
};

const sendContactEmail = (data: ContactType) => {
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
      name: 'Lusho'
    },
    subject: 'Message from Lusho App',
    to: [{ email }]
  }
  
  return sendEmail(payload);
}

export const mailingService = {
  sendContactEmail
};
