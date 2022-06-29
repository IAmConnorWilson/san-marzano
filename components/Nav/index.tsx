import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/LogoBlack.png";
import Link from "next/link";
import Text from "../Text";
import { useRouter } from "next/router";
import Button from "../Button";
import Box from "../Box";

const Nav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <NavContainer>
      <ContentWrapper>
        <NavWrapper>
          <LogoContainer>
            <Image src={Logo} alt="San Marzano Logo" objectFit="contain" />
          </LogoContainer>
          <Box />
          <MenuItems>
            <Link href="/">
              <MenuItem>
                <Text
                  size={18}
                  family={path === "/" ? "garamondBold" : "garamond"}
                  textAlign="center"
                >
                  Home
                </Text>
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>
                <Text
                  textAlign="center"
                  size={18}
                  family={path === "/menu" ? "garamondBold" : "garamond"}
                >
                  Menus
                </Text>
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>
                <Text
                  textAlign="center"
                  size={18}
                  family={path === "/about" ? "garamondBold" : "garamond"}
                >
                  About
                </Text>
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>
                <Text
                  textAlign="center"
                  size={18}
                  family={path === "/faq" ? "garamondBold" : "garamond"}
                >
                  FAQ
                </Text>
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>
                <Text
                  textAlign="center"
                  size={18}
                  family={path === "/contact" ? "garamondBold" : "garamond"}
                >
                  Contact
                </Text>
              </MenuItem>
            </Link>
            <Button>Reserve</Button>
          </MenuItems>
        </NavWrapper>
      </ContentWrapper>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr max-content;
  padding: 16px;
`;

const LogoContainer = styled.div`
  min-height: 90px;
`;

const MenuItems = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 16px;
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-gap: 20px;
  }
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-gap: 32px;
  }
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;
`;
