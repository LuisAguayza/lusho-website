
import { Controller, FieldValues, UseControllerProps, useFormContext } from 'react-hook-form';
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { TextInput, TextInputArea } from './text-input';

type FormInputTextProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    tooltip?: string;
    label: string;
  };

export const FormInputText = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  tooltip,
  ...restprops
}: FormInputTextProps<TFieldValues>) => (
  <Controller
    name={name}
    control={control}
    render={({ field , fieldState: { error } }) => 
      <TextInput
        error={!!error}
        tooltip={error?.message ?? tooltip}
        label={label}
        {...restprops}
        {...field}
      /> 
    }
  />
);

type FormTextAreaProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
    label: string;
    tooltip?: string;
  };

export const FormInputTextArea = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  tooltip,
  ...restProps
}: FormTextAreaProps<TFieldValues>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => 
      <TextInputArea
        error={!!error}
        tooltip={error?.message ?? tooltip}
        label={label}
        {...field}
        {...restProps}
      />
    }
  />
);