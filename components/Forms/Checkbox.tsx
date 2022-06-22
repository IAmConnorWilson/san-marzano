/* eslint-disable react/destructuring-assignment */
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
} from "styled-system";
import SanMarzanoTheme, { SanMarzanoThemeType } from "../../utils/theme";

interface CheckboxBaseProps
  extends SpaceProps<SanMarzanoThemeType>,
    LayoutProps<SanMarzanoThemeType>,
    FlexboxProps<SanMarzanoThemeType> {}
interface UserCheckboxProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export type CheckboxProps = UserCheckboxProps &
  CheckboxBaseProps &
  StyledComponentPropsWithRef<"input">;

const CheckboxBase = styled.div<CheckboxBaseProps>(
  {},
  compose(space, layout, flexbox)
);

const Checkbox: FC<CheckboxProps> = ({
  children,
  isInvalid,
  isDisabled,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxBase>
      <CheckboxWrapper isInvalid={isInvalid} key={props.id}>
        <CheckboxLabel htmlFor={props.id}>
          <CheckboxInput
            type="checkbox"
            readOnly
            disabled={isDisabled}
            {...props}
          />
          <Child isInvalid={isInvalid}>{children}</Child>
          <CheckMark isDisabled={isDisabled} />
        </CheckboxLabel>
      </CheckboxWrapper>
    </CheckboxBase>
  );
};
export default styled(Checkbox)``;

const CheckMark = styled.span<{ isDisabled?: boolean }>`
  ${({ isDisabled }) => (isDisabled ? "cursor: not-allowed;" : "")}
`;
const CheckboxInput = styled.input``;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 1.6rem;
`;

const Child = styled.span<{ isInvalid?: boolean }>`
  color: ${({ isInvalid }) =>
    isInvalid ? SanMarzanoTheme.colors.red500 : SanMarzanoTheme.colors.black};
  margin-left: 2px;
  line-height: 1.4;
`;

const CheckboxWrapper = styled.div<{ isInvalid?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* Hide the browser's default Checkbox */
  label > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom Checkbox */
  ${CheckMark} {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 18px;
    width: 18px;
    border-radius: 4px;
    transition: all ease 0.3s;
    border: 2px solid ${SanMarzanoTheme.colors.blue};
  }

  /* On mouse-over, add a grey background color */
  label:hover input ~ ${CheckMark} {
    background-color: ${SanMarzanoTheme.colors.gray700};
  }

  /* When the Checkbox is checked, add a blue background */
  label input:checked ~ ${CheckMark} {
    background-color: ${SanMarzanoTheme.colors.blue};
  }
  /* When the Checkbox is checked, add a blue background */
  label input:not(:checked) ~ ${CheckMark} {
    border: 2px solid
      ${({ isInvalid }) =>
        isInvalid
          ? SanMarzanoTheme.colors.red500
          : SanMarzanoTheme.colors.black};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  ${CheckMark}:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  label input:checked ~ ${CheckMark}:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  label ${CheckMark}:after {
    left: 4px;
    top: -2px;
    width: 7px;
    height: 14px;
    border: 2px solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
