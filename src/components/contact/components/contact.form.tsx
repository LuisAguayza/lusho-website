import { yupResolver } from '@hookform/resolvers/yup';
import { mailingService } from 'api';
import { Form, FormInputText, FormInputTextArea, Grid, LoadingButton } from "components-styled";
import { useFeedback } from 'context/feedback';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { contactSchema, ContactType } from '.';

export const ContactForm = () => {
  const { sendContactEmail } = mailingService;
  const [loading, setLoading] = useState(false);
  const { showErrorModal, showSuccessModal } = useFeedback();
  const { control, handleSubmit, reset } = useForm<ContactType>({
    defaultValues: {
      message: '',
      email: '',
      name: '',
    },
    resolver: yupResolver(contactSchema)
  });

  const handleSendMessage = async (data: ContactType) => {
    try {
      setLoading(true);
      await sendContactEmail(data);
      reset();
      showSuccessModal('Su mensaje se ha enviado correctamente')
    } catch (error) {
      showErrorModal('No se pudo enviar tu mensaje :(')
      console.log({ error })
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
          label='Name'
          placeholder='Enter your name'
          tooltip='Your name'
        />
        <FormInputText
          control={control}
          name='email'
          label='Mail'
          placeholder='Enter your email'
          tooltip='Your email'
        />
        <FormInputTextArea
          control={control}
          name='message'
          label="Message"
          placeholder="Your message"
          tooltip="Your message"
          rows={3}
        />
        <LoadingButton
          type='submit'
          label='Send Message'
          fullwidth
          loading={loading}
          icon='uil uil-message'
          style={{ marginTop: '0.3rem' }}
        />
      </Grid>
    </Form>
  )
}
