import { FC, MouseEvent } from "react";
import * as React from "react";

import {
  TypographyProps,
  SpaceProps,
  BordersProps,
  LayoutProps,
  FlexboxProps,
  compose,
  color,
  layout,
  typography,
  space,
  border,
  variant,
  flexbox,
  ColorProps,
} from "styled-system";
import styled from "styled-components";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";
import { Enum } from "../../utils/enum";

// utils
interface ButtonBaseProps
  extends BordersProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {}

const DisabledStyles = {
  "&:disabled": {
    // color: SanMarzanoTheme.colors.grey.shade4,
    // background: SanMarzanoTheme.colors.grey.shade5,
    // cursor: 'not-allowed',
  },
};

const ButtonBase = styled.button<ButtonBaseProps>(
  {
    fontFamily: "'EB Garamond', serif",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
    textDecoration: "none",
    lineHeight: "24px",
    padding: "8px 12px",
    // stopping blue flicker on tap in mobile
    "-webkit-tap-highlight-color": "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  compose(color, typography, space, border, layout, flexbox),
  {
    ...DisabledStyles,
  },
  compose(
    variant({
      prop: "variant",
      variants: {
        primary: {
          bg: SanMarzanoTheme.colors.olive,
          color: SanMarzanoTheme.colors.cream,
          "@media(hover: hover) and (pointer: fine)": {
            "&:hover": {
              bg: "rgba(72, 72, 48, 0.6)",
            },
            "&:focus": {
              bg: "rgba(72, 72, 48, 0.6)",
            },
          },
        },
        secondary: {
          border: `2px solid ${SanMarzanoTheme.colors.olive}`,
          bg: SanMarzanoTheme.colors.cream,
          color: SanMarzanoTheme.colors.olive,
          "@media(hover: hover) and (pointer: fine)": {
            "&:hover": {
              bg: "rgba(72, 72, 48, 0.1);",
            },
            "&:focus": {
              bg: "rgba(72, 72, 48, 0.1)",
            },
          },
        },
      },
    }),
    variant({
      prop: "size",
      variants: {
        small: {
          px: 8,
          py: 4,
        },
        dense: {
          px: 16,
          py: 8,
        },
      },
    })
  )
);

const ButtonVariant = Enum("primary", "secondary");

type ButtonVariant = Enum<typeof ButtonVariant>;

type ButtonAsType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  as?: ButtonAsType;
}

export type CompleteButtonType = ButtonProps &
  ButtonBaseProps &
  // Added so we can use as={a} tags easily with href
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
  // Add html button props
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<CompleteButtonType> = ({
  isDisabled = false,
  fontSize = 16,
  variant = "primary",
  ...props
}: CompleteButtonType) => {
  return (
    <ButtonBase
      variant={variant}
      tabIndex={0}
      disabled={isDisabled}
      fontSize={fontSize}
      {...props}
    />
  );
};

export default Button;
