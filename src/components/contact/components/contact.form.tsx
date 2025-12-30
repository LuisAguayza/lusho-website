import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormInputText, FormInputTextArea, Grid, LoadingButton } from "components-styled";
import { useFeedback } from 'context/feedback';
import { useI18n } from 'context/i18n';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { IContactForm, useContactSchema } from '.';
import { mailingService } from 'services';

export const ContactForm = () => {
  const { sendContactEmail } = mailingService;
  const [loading, setLoading] = useState(false);
  const { showErrorModal, showSuccessModal } = useFeedback();
  const { translate } = useI18n();
  const { control, handleSubmit, reset } = useForm<IContactForm>({
    defaultValues: {
      message: '',
      email: '',
      name: '',
    },
    resolver: yupResolver(useContactSchema())
  });

  const handleSendMessage = async (data: IContactForm) => {
    try {
      setLoading(true);
      const test = await sendContactEmail(data);
      if (!test.success) throw new Error();
      showSuccessModal(translate('contact.form.messageSent'))
      reset();
    } catch (error) {
      showErrorModal(translate('contact.form.notSent'))
      console.error({ error })
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSendMessage)}>
      <Grid container spacing={{ xs: 'sm', md: 'sm' }} >
        <FormInputText
          control={control}
          name='name'
          label={translate("contact.form.name")}
          placeholder={translate("contact.form.namePlaceholder")}
          tooltip={translate("contact.form.nameTooltip")}
        />
        <FormInputText
          control={control}
          name='email'
          label={translate("contact.form.mail")}
          placeholder={translate("contact.form.emailPlaceholder")}
          tooltip={translate("contact.form.emailTooltip")}
        />
        <FormInputTextArea
          control={control}
          name='message'
          label={translate("contact.form.message")}
          placeholder={translate("contact.form.messagePlaceholder")}
          tooltip={translate("contact.form.messageTooltip")}
          rows={3}
        />
        <LoadingButton
          type='submit'
          label={translate("form.send")}
          fullwidth
          loading={loading}
          icon='uil uil-message'
          style={{ marginTop: '0.3rem' }}
        />
        <FormInputText
          control={control}
          name='website'
          label=''
          tabIndex={-1}
          autoComplete='off'
          style={{ display: 'none' }}
        />
      </Grid>
    </Form>
  )
}
