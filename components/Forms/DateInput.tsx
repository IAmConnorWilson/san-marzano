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

interface DateInputBaseProps
  extends BorderProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType>,
    TypographyProps<SanMarzanoThemeType> {}

// Placeholder text for IOS date inputs
const DatePlaceholder = styled.div`
  top: -36px;
  left: 16px;
  font-size: 1rem;
  display: none;
  color: ${({ theme }) => theme.colors.gray800};
`;

const DateInputBase = styled.input<DateInputBaseProps>(
  {
    fontFamily: "Inter",
    width: "100%",
    height: "48px",
    fontSize: "1rem",
    letterSpacing: "0.01em",
    borderRadius: "4px",
    border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
    backgroundColor: `${SanMarzanoTheme.colors.white}`,
    color: SanMarzanoTheme.colors.black,
    padding: "12px 16px",
    boxSizing: "border-box",
    transition: "all ease .2",
    position: "relative",
    "&:focus": {
      outline: "none",
      border: `1px solid ${SanMarzanoTheme.colors.blue}`,
      // hiding the IOS plceholder
      "~ div": {
        display: "none",
      },
    },
    "&:disabled": {
      border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
      backgroundColor: SanMarzanoTheme.colors.gray300,
      cursor: "not-allowed",
    },
    // Targeting IOS safari
    "@supports (-webkit-touch-callout: none)": {
      // Adding the calendar icon
      backgroundImage: `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M19%209H5V19H19V9ZM3%207V21H21V7H3Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M7%2015H9V17H7V15Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M11%2015H13V17H11V15Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M15%2015H17V17H15V15Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M11%2011H13V13H11V11Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M15%2011H17V13H15V11Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M5%203H9V5H5V3Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3Cpath%20d%3D%22M15%203H19V5H15V3Z%22%20fill%3D%22%23333333%22%2F%3E%0A%3C%2Fsvg%3E')`,
      backgroundPosition: "right 12px top 50%",
      backgroundRepeat: "no-repeat, repeat",
      minHeight: "20px",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      "~ div": {
        position: "relative",
        display: "block !important",
      },
    },
  },
  compose(color, typography, space, border, layout, flexbox)
);

interface UserDateInputProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export type DateInputProps = UserDateInputProps &
  DateInputBaseProps &
  StyledComponentPropsWithRef<"input">;

/**
 * DANGER: This component does not support safari browser
 * You will need to supply a custom component for date time
 * if you need to support safari on the browser
 */
export const DateInput: FC<DateInputProps> & {} = ({
  isDisabled,
  isInvalid,
  ...props
}: DateInputProps) => {
  return (
    <>
      <DateInputBase
        {...props}
        borderColor={isInvalid ? "red500" : "gray700"}
        tabIndex={0}
        disabled={isDisabled}
      />
      {/* Will only display if there no value and not focused on IOS Safari */}
      {!props.value && (
        <DatePlaceholder>{props.placeholder || "mm/dd/yyyy"}</DatePlaceholder>
      )}
    </>
  );
};

DateInput.defaultProps = {
  isDisabled: false,
  isInvalid: false,
};

export default DateInput;
