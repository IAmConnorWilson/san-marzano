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
import { SanMarzanoThemeType } from "../../utils/theme";
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
    display: "flex",
    alignItems: "center",
    fontFamily: "Inter",
    cursor: "pointer",
    border: "none",
    fontWeight: 500,
    textDecoration: "none",
    lineHeight: "24px",
    padding: "2px 4px",
    borderStyle: "solid",
    borderWidth: "4px",
    borderLeftColor: "rgba(255, 255, 255, 0.2)",
    borderRightColor: "rgba(0, 0, 0, 0.15)",
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    borderTopColor: "rgba(255, 255, 255, 0.33)",
    // stopping blue flicker on tap in mobile
    "-webkit-tap-highlight-color": "transparent",
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
          outline: "none",
          fontFamily: "Source Sans Pro",
          fontSize: " 1em",
          boxSizing: "border-box",
          borderRadius: ".3em",
          height: " 2.75em",
          lineHeight: "2.5em",
          textTransform: "uppercase",
          padding: "0 1em",
          boxShadow:
            "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(110,80,20,.4), inset 0 -2px 5px 1px rgba(139,66,8,1),inset 0 -1px 1px 3px rgba(250,227,133,1)",
          backgroundImage:
            "linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07)",
          border: "1px solid #a55d07",
          color: "rgb(120,50,5)",
          textShadow: "0 2px 2px rgba(250, 227, 133, 1)",
          cursor: "pointer",
          transition: "all .2s ease-in-out",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          "@media(hover: hover) and (pointer: fine)": {
            "&:hover": {
              backgroundSize: "150% 150%",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23),inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250,227,133,1)",
              border: "1px solid rgba(165,93,7,.6)",
              color: "rgba(120,50,5,.8)",
            },
            "&:focus": {
              backgroundSize: "150% 150%",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23),inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250,227,133,1)",
              border: "1px solid rgba(165,93,7,.6)",
              color: "rgba(120,50,5,.8)",
            },
          },
          "&:hover": {
            backgroundSize: "150% 150%",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23),inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250,227,133,1)",
            border: "1px solid rgba(165,93,7,.6)",
            color: "rgba(120,50,5,.8)",
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

const ButtonVariant = Enum("primary");

type ButtonVariant = Enum<typeof ButtonVariant>;

const ButtonSize = Enum("small", "dense");
type ButtonSize = Enum<typeof ButtonSize>;

type ButtonAsType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  fontSize = 14,
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
