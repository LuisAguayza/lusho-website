import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormInputText, FormInputTextArea, Grid, LoadingButton } from "components-styled";
import { useForm } from "react-hook-form";
import { InferType, object, string } from "yup";

export const schema = object().shape({
  name: string().required('Name is required').min(3, 'Debe contener al menos 3 caracteres'),
  email: string().email().required(),
  message: string().required('Message is required').min(10, 'Debe contener al menos 10 caracteres'),
});

type FormValues = InferType<typeof schema>;

export const ContactForm = () => {

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      message: '',
      email: '',
      name: '',
    },
    resolver: yupResolver(schema)
  });

  const handleSendMessage = (data: FormValues) => {
    console.log(data);
    reset();
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
          loading={false}
          icon='uil uil-message'
          style={{ marginTop: '0.3rem' }}
        />
      </Grid>
    </Form>
  )
}
