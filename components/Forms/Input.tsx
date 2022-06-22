/* eslint-disable react/destructuring-assignment */
import { FC } from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";

import { FormControlVariants } from "./FormControl";

interface InputBaseProps
  extends BorderProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {
  autocomplete?: string;
  spellcheck?: string;
}

const InputBase = styled.input<InputBaseProps>(
  {
    width: "100%",
    // fontSize: '1rem',
    letterSpacing: "0.01em",
    backgroundColor: `${SanMarzanoTheme.colors.white}`,
    color: SanMarzanoTheme.colors.black,
    padding: "8px 12px",
    boxSizing: "border-box",
    transition: "all ease .2",
    "&:disabled": {
      backgroundColor: SanMarzanoTheme.colors.gray300,
      cursor: "not-allowed",
    },
  },
  compose(color, typography, space, border, layout, flexbox),
  compose(
    variant({
      prop: "variant",
      variants: {
        minimal: {
          border: "none",
          borderRadius: "0px",
          borderBottom: `2px solid ${SanMarzanoTheme.colors.gray700}`,
          padding: "8px 4px",
        },
        default: {
          borderRadius: "4px",
          height: "48px",
          border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
          "&:focus": {
            outline: "none",
            border: `1px solid ${SanMarzanoTheme.colors.blue}`,
          },
          "&:disabled": {
            border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
            backgroundColor: SanMarzanoTheme.colors.gray300,
            cursor: "not-allowed",
          },
        },
      },
    })
  )
);

interface UserInputProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  withIcon?: boolean;
  variant?: FormControlVariants;
}

export type InputProps = UserInputProps &
  InputBaseProps &
  StyledComponentPropsWithRef<"input">;

export const Input: FC<InputProps> & {} = ({
  isDisabled,
  isInvalid,
  withIcon,
  borderColor: userBorderColor,
  ...props
}: InputProps) => {
  const borderColor = userBorderColor || "gray700";
  return (
    <InputBase
      {...props}
      pl={withIcon ? 40 : 16}
      borderColor={isInvalid ? "red500" : borderColor}
      tabIndex={0}
      disabled={isDisabled}
    />
  );
};

Input.defaultProps = {
  isDisabled: false,
  isInvalid: false,
  withIcon: false,
  autocomplete: "off",
  autoComplete: "off",
};

export default Input;
