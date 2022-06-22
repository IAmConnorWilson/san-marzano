import Image from "next/image";
import styled from "styled-components";
import Box from "../components/Box";
import Text from "../components/Text";
import Nav from "../components/Nav";

// Added for symnatic
const Section = Box;

const Home = () => {
  return (
    <HomeWrapper>
      <Box position="absolute" top={0} width="100%" zIndex={1}>
        <Nav />
      </Box>
      <Section position="relative" display="flex" justifyContent="center">
        Im on the homepage
      </Section>
    </HomeWrapper>
  );
};

export default Home;

// Hack for now
const HomeWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
