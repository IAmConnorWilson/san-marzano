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
} from "styled-system";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";

interface TextareaBaseProps
  extends BorderProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {}

const TextareaBase = styled.textarea<TextareaBaseProps>(
  {
    fontFamily: "Inter",
    width: "100%",
    fontSize: "1rem",
    letterSpacing: "0.01em",
    borderRadius: "4px",
    border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
    backgroundColor: `${SanMarzanoTheme.colors.white}`,
    color: SanMarzanoTheme.colors.black,
    padding: "12px 16px",
    boxSizing: "border-box",
    transition: "all ease .2",
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
  compose(color, typography, space, border, layout, flexbox)
);

interface UserTextareaProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export type TextareaProps = UserTextareaProps &
  TextareaBaseProps &
  StyledComponentPropsWithRef<"textarea">;

export const Textarea: FC<TextareaProps> & {} = ({
  isDisabled,
  isInvalid,
  borderColor: userBorderColor,
  rows = 5,
  ...props
}: TextareaProps) => {
  const borderColor = userBorderColor || "gray700";
  return (
    <TextareaBase
      {...props}
      borderColor={isInvalid ? "red500" : borderColor}
      tabIndex={0}
      disabled={isDisabled}
      rows={rows}
    />
  );
};

Textarea.defaultProps = {
  isDisabled: false,
  isInvalid: false,
};

export default Textarea;
