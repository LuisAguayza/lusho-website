import { useI18n } from "context/i18n";
import { object, string } from "yup";

export interface IContactForm {
  message: string,
  email: string,
  name: string,
  website: string | null;
}

export const useContactSchema = () => {
  const { translate } = useI18n();
  return object({
    name: string()
      .required(translate('form.required'))
      .min(3, translate('form.min', { min: 3 })),
    email: string()
      .required(translate('form.required'))
      .email(translate('form.email')),
    message: string()
      .required(translate('form.required'))
      .min(10, translate('form.min', { min: 10 })),
    website: string().nullable().default(null),
  });
};
