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
      prop: "family",
      variants: {
        garamond: {
          fontFamily: "'EB Garamond', serif",
        },
        garamondBold: {
          fontFamily: "'EB Garamond', serif",
          fontWeight: 700,
        },
        josefin: {
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
        },
        josefinBold: {
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 400,
        },
      },
    })
  )
);

const Family = Enum("garamond", "garamondBold", "josefin", "josefinBold");
type Family = Enum<typeof Family>;

type TextAsType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

interface TextCustomProps {
  size?: number;
  family?: Family;
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
  family = "josefin",
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
