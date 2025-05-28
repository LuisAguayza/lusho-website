import { FieldWrapper, Icon, IconWrapper, InputLabel, InputWrapper, StyledInput, StyledTextarea, Tooltip } from 'components-styled';
import { InputHTMLAttributes, ReactNode, Ref, TextareaHTMLAttributes } from 'react';

type InputBaseProps = {
  tooltip?: string;
  error?: boolean;
  label: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputBaseProps;

export const InputBase = (props: InputBaseProps & { children: ReactNode }) => {
  const { label, tooltip, error, children } = props; 
  const hasError = !!error;
  return (
    <FieldWrapper error={hasError}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        {children}
        { tooltip && (
          <IconWrapper error={hasError}>
            <Tooltip label={tooltip}>
              <Icon className='"uil uil-info-circle'/>
            </Tooltip>
          </IconWrapper>
        )}
      </InputWrapper>
    </FieldWrapper>
  )
}

export const TextInput = ({ label, tooltip, error, ...props }: InputProps) => (
  <InputBase
    label={label}
    tooltip={tooltip}
    error={error}
  >
    <StyledInput error={error} {...props} />
  </InputBase>
);

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & InputBaseProps;
 
export const TextInputArea = ({ label, tooltip, error, ...props }: TextareaProps) => (
  <InputBase
    label={label}
    tooltip={tooltip}
    error={error}
  >
    <StyledTextarea error={error} {...props} />
  </InputBase>
)