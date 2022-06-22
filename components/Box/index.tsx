import styled from "styled-components";
import {
  SpaceProps,
  BordersProps,
  LayoutProps,
  FlexboxProps,
  color,
  layout,
  space,
  border,
  flexbox,
  ColorProps,
  PositionProps,
  position,
  GridProps,
  grid,
} from "styled-system";
import { SanMarzanoThemeType } from "../../utils/theme";

export interface BoxProps
  extends BordersProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    PositionProps<SanMarzanoThemeType>,
    GridProps<SanMarzanoThemeType> {}

const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  border,
  space,
  color,
  layout,
  flexbox,
  position,
  grid
);

export default Box;
