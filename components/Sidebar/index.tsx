import styled from "styled-components";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { storeActions } from "../../store";

// TODO: Implement mobile styling
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.global);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const closeSidebar = () => {
    dispatch(storeActions.globalActions.setSidebarState(false));
  };

  const handleItemClick = (route: string) => {
    router.push(route);
    dispatch(storeActions.globalActions.setSidebarState(false));
  };

  return (
    <>
      {isSidebarOpen && <SidebarWrapper onClick={closeSidebar} />}
      <SidebarInner isOpen={isSidebarOpen}>
        <SidebarHeader>Menu</SidebarHeader>
        <SidebarItem onClick={() => handleItemClick("/")}>Home</SidebarItem>
      </SidebarInner>
    </>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;

  background: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
`;

const SidebarInner = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 400px;

  position: absolute;
  left: 0;
  top: 0;

  z-index: 2;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-400px)"};
  transition: transform 250ms ease-in-out;

  background: ${({ theme }) => theme.colors.gray400};
`;

const SidebarHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  text-align: center;
  color: ${({ theme }) => theme.colors.textGray};
`;

const SidebarItem = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.textGold};

  cursor: pointer;
`;
