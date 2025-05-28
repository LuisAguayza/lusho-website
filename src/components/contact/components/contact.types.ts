import { InferType, object, string } from "yup";

export const contactSchema = object().shape({
  name: string().required('Name is required').min(3, 'Debe contener al menos 3 caracteres'),
  email: string().email().required(),
  message: string().required('Message is required').min(10, 'Debe contener al menos 10 caracteres'),
});

export type ContactType = InferType<typeof contactSchema>;