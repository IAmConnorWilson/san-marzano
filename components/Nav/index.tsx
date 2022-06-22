import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../Button";
import { GlobalActionType } from "../../store/global.module";

const Nav = () => {
  const dispatch = useAppDispatch();

  const openSidebar = () => {
    dispatch({
      type: GlobalActionType.SET_SIDEBAR_STATE,
      data: { isSidebarOpen: true },
    });
  };

  return (
    <NavWrapper>
      <Button variant="primary" onClick={openSidebar}>
        <IoMdMenu size="24" />
      </Button>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  padding: 24px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
