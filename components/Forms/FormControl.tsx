import { FC } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from "styled-system";
import { Text, TextProps } from "../Text";
import Checkbox, { CheckboxProps } from "./Checkbox";
import DateInput, { DateInputProps } from "./DateInput";
import Dropdown, { DropdownOption, DropdownProps } from "./Dropdown";
import Input, { InputProps } from "./Input";
import Textarea, { TextareaProps } from "./Textarea";
// utils
import { Enum } from "../../utils/enum";
import { SanMarzanoThemeType } from "../../utils/theme";

// TODO - add back in switch and radio
type InputType =
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "dropdown"
  | "textarea"
  | "switch";

// Alternative style selection
const FormControlVariants = Enum("minimal", "default");
export type FormControlVariants = Enum<typeof FormControlVariants>;

interface FormControlBaseProps
  extends SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    PositionProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {}

type ControlMeta = {
  value: any;
  /** Error message of the field */
  error?: string;
  /** Has the field been visited? */
  touched: boolean;
  /** Initial value of the field */
  initialValue?: any;
  /** Initial touched state of the field */
  initialTouched: boolean;
  /** Initial error message of the field */
  initialError?: string;
};

interface FormControlUserProps {
  withIcon?: boolean;
  meta?: ControlMeta;
  type?: InputType;
  name?: string;
  label?: string;
  hint?: string;
  isDisabled?: boolean;
  options?: DropdownOption[];
  children?: any;
  required?: boolean;
  variant?: FormControlVariants;
  autocomplete?: string;
  spellcheck?: string;
}

type CompleteFormControlProps = FormControlUserProps &
  FormControlBaseProps &
  StyledComponentPropsWithRef<"div"> &
  StyledComponentPropsWithRef<"input">;

type LabelProps = { isInvalid?: boolean };

const Label: FC<LabelProps> = ({ isInvalid, ...rest }: LabelProps) => (
  <Text
    color={isInvalid ? "red500" : "black"}
    as="label"
    display="block"
    size={13}
    {...rest}
  />
);

const Error: FC<TextProps> = ({ ...rest }: TextProps) => (
  <Text color="red500" size={14} {...rest} />
);

const Hint: FC<TextProps> = ({ ...rest }: TextProps) => (
  <Text color="black" size={14} {...rest} />
);

const FormControlBase = styled.div<FormControlBaseProps>(
  {},
  compose(space, typography, layout, flexbox, position)
);

export const FormControl: FC<CompleteFormControlProps> & {
  Label: FC<LabelProps>;
  Error: FC<TextProps>;
  Hint: FC<TextProps>;
  Input: FC<InputProps>;
  DateInput: FC<DateInputProps>;
  Checkbox: FC<CheckboxProps>;
  Dropdown: FC<DropdownProps>;
  Textarea: FC<TextareaProps>;
} = ({
  type = "text",
  name,
  onChange,
  placeholder,
  label,
  meta,
  children,
  hint,
  id,
  isDisabled,
  options = [],
  required,
  min,
  max,
  withIcon,
  maxLength,
  minLength,
  pattern,
  autocomplete = "on",
  spellcheck = "true",
  variant = "default",
  ...rest
}: CompleteFormControlProps) => {
  const isInvalid = !!meta?.touched && !!meta?.error;
  const isTouched = meta?.touched;

  if (children) {
    return <FormControlBase {...rest}>{children}</FormControlBase>;
  }

  if (type === "checkbox") {
    return (
      <FormControlBase {...rest}>
        <Checkbox
          isInvalid={isInvalid}
          name={name}
          id={id || name}
          onChange={onChange}
          type={type}
          isDisabled={isDisabled}
          checked={meta?.value}
        >
          {label}
        </Checkbox>
      </FormControlBase>
    );
  }

  if (type === "dropdown") {
    return (
      <FormControlBase {...rest}>
        <Label isInvalid={isInvalid}>
          {label}
          <Dropdown
            isInvalid={isInvalid}
            name={name}
            placeholder={placeholder}
            // Handling type differences without doing type descrimination
            onChange={(e: any) => {
              if (onChange) onChange(e);
            }}
            options={options}
            isDisabled={isDisabled}
            value={meta?.value || ""}
            required={required}
          />
          {!!hint && !isInvalid && <Hint>{hint}</Hint>}
          {isTouched && <Error>{meta?.error}</Error>}
        </Label>
      </FormControlBase>
    );
  }

  if (type === "textarea") {
    return (
      <FormControlBase {...rest}>
        <Label isInvalid={isInvalid}>
          {label}
          <Textarea
            isInvalid={isInvalid}
            name={name}
            placeholder={placeholder}
            // Handling type differences without doing type descrimination
            // @ts-ignore
            onChange={onChange}
            isDisabled={isDisabled}
          />
          {!!hint && !isInvalid && <Hint>{hint}</Hint>}
          {isTouched && <Error>{meta?.error}</Error>}
        </Label>
      </FormControlBase>
    );
  }

  if (type === "date" || type === "datetime-local") {
    return (
      <FormControlBase {...rest}>
        <Label isInvalid={isInvalid}>
          {label}
          <DateInput
            isInvalid={isInvalid}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            isDisabled={isDisabled}
            value={meta?.value || ""}
            min={min}
            max={max}
          />
          {!!hint && !isInvalid && <Hint>{hint}</Hint>}
          {isTouched && <Error>{meta?.error}</Error>}
        </Label>
      </FormControlBase>
    );
  }

  if (type === "tel") {
    return (
      <FormControlBase {...rest}>
        <Label isInvalid={isInvalid}>{label}</Label>
        <Input
          isInvalid={isInvalid}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          isDisabled={isDisabled}
          value={meta?.value || ""}
          variant={variant}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autocomplete={autocomplete}
        />
        {!!hint && !isInvalid && <Hint>{hint}</Hint>}
        {isTouched && <Error>{meta?.error}</Error>}
      </FormControlBase>
    );
  }

  if (type === "time") {
    return (
      <FormControlBase {...rest}>
        <Label isInvalid={isInvalid}>{label}</Label>
        <Input
          withIcon={withIcon}
          isInvalid={isInvalid}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          isDisabled={isDisabled}
          value={meta?.value || ""}
          variant={variant}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
        />
        {!!hint && !isInvalid && <Hint>{hint}</Hint>}
        {isTouched && <Error>{meta?.error}</Error>}
      </FormControlBase>
    );
  }

  return (
    <FormControlBase {...rest}>
      <Label isInvalid={isInvalid}>{label}</Label>
      <Input
        withIcon={withIcon}
        isInvalid={isInvalid}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        isDisabled={isDisabled}
        value={meta?.value || ""}
        variant={variant}
        maxLength={maxLength}
        minLength={minLength}
        textAlign={rest?.textAlign ?? "start"}
        autocomplete={autocomplete}
        spellcheck={spellcheck}
      />
      {!!hint && !isInvalid && <Hint>{hint}</Hint>}
      {isTouched && <Error>{meta?.error}</Error>}
    </FormControlBase>
  );
};

// Composite exports
FormControl.Label = Label;
FormControl.Input = Input;
FormControl.DateInput = DateInput;
FormControl.Checkbox = Checkbox;
FormControl.Dropdown = Dropdown;
FormControl.Error = Error;
FormControl.Hint = Hint;
FormControl.Textarea = Textarea;

export default FormControl;
