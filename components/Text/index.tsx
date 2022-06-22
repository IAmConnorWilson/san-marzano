import { FC } from "react";
import * as React from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import {
  color,
  compose,
  space,
  SpaceProps,
  TypographyProps,
  typography,
  variant,
  border,
  layout,
  LayoutProps,
  BordersProps,
  flexbox,
  FlexboxProps,
  ColorProps,
} from "styled-system";
import { Enum } from "../../utils/enum";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";

interface TextBaseProps
  extends BordersProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {}

const TextBase = styled("div")<TextBaseProps>(
  {
    display: "block",
  },
  compose(
    color,
    typography,
    space,
    layout,
    border,
    flexbox,
    variant({
      prop: "spacing",
      variants: {
        // TODO put these into the theme
        tight: {
          letterSpacing: "-0.05em",
        },
        normal: {
          letterSpacing: 0,
        },
        loose: {
          letterSpacing: "0.05em",
        },
      },
    }),
    variant({
      prop: "weight",
      variants: {
        thin: {
          fontWeight: 0,
        },
        normal: {
          fontWeight: 1,
        },
        heavy: {
          fontWeight: 2,
        },
      },
    }),
    variant({
      prop: "family",
      variants: {
        heading: {
          fontFamily: "DM Serif Display",
        },
        body: {
          fontFamily: "Source Sans Pro",
        },
      },
    }),
    variant({
      prop: "variant",
      variants: {
        golden: {
          fontFamily: "DM Serif Display",
          background: SanMarzanoTheme.gradients.golden,
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
    })
  )
);

const TextSpacing = Enum("tight", "normal", "loose");
type TextSpacing = Enum<typeof TextSpacing>;

const TextWeight = Enum("thin", "normal", "heavy");
type TextWeight = Enum<typeof TextWeight>;

const Family = Enum("heading", "body");
type Family = Enum<typeof Family>;

const Variant = Enum("golden");
type Variant = Enum<typeof Variant>;

type TextAsType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

interface TextCustomProps {
  size?: number;
  weight?: TextWeight;
  spacing?: TextSpacing;
  family?: Family;
  variant?: Variant;
  as?: TextAsType;
}

export type TextProps = TextCustomProps &
  TextBaseProps &
  StyledComponentPropsWithRef<"div"> &
  StyledComponentPropsWithRef<"a">;

export const Text: FC<TextProps> = ({
  color: textColor,
  size = 16,
  lineHeight: userLineHeight,
  family = "body",
  ...props
}: TextProps) => {
  // Helpers
  const pixelsToRem = (pixelVal: number) => {
    return `${pixelVal / 16}rem`;
  };

  const calcLineHeight = (selectedFontSize: number) => {
    return pixelsToRem(selectedFontSize * 1.5);
  };

  // Consts
  const fontSize = size && pixelsToRem(size);
  const lineHeight = userLineHeight || (size && calcLineHeight(size));

  return (
    <TextBase
      // This is a work around to deal with shitty color problem
      color={textColor as any}
      fontSize={fontSize}
      lineHeight={lineHeight}
      family={family}
      {...props}
    />
  );
};

Text.defaultProps = {};
export default Text;
