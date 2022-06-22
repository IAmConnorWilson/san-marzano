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
} from "styled-system";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";

export type DropdownOption = {
  value: any;
  id?: string;
  label: string;
};
interface DropdownBaseProps
  extends BorderProps<SanMarzanoThemeType>,
    ColorProps<SanMarzanoThemeType>,
    SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType> {}

interface UserDropdownProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  options: DropdownOption[];
}

export type DropdownProps = UserDropdownProps &
  DropdownBaseProps &
  StyledComponentPropsWithRef<"select">;

const DropdownBase = styled.select<DropdownBaseProps>(
  {
    display: "block",
    padding: "12px 16px",
    width: "100%",
    height: "48px",
    fontSize: "1rem",
    background: `${SanMarzanoTheme.colors.white}`,
    appearance: "none",
    backgroundImage: `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2011V9H17V11L12%2015L7%2011Z%22%20fill%3D%22%23333333%22%2F%3E%3C%2Fsvg%3E%0A')`,
    backgroundPosition: "right 5px top 50%",
    backgroundRepeat: "no-repeat, repeat",
    border: `1px solid ${SanMarzanoTheme.colors.gray700}`,
    borderRadius: "4px",
    color: `${SanMarzanoTheme.colors.gray800}`,
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
  compose(color, space, border, layout, flexbox)
);

const Dropdown: FC<DropdownProps> = ({
  children,
  isInvalid,
  isDisabled,
  options = [],
  placeholder,
  required,
  value,
  ...props
}: DropdownProps) => {
  return (
    <DropdownBase
      {...props}
      disabled={isDisabled}
      borderColor={isInvalid ? "red500" : "gray700"}
      color={value ? "black" : "gray800"}
      value={value}
    >
      {placeholder && (
        <option disabled={required} value="">
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.id || option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </DropdownBase>
  );
};

export default Dropdown;
