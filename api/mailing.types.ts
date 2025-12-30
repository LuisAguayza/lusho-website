export interface BrevoEmailPayload {
  sender: {
    name: string;
    email: string;
    website: string | null;
  };
  to: Array<{
    email: string;
    name?: string;
  }>;
  subject: string;
  htmlContent: string;
}

export interface BrevoResponse {
  messageId: string;
}