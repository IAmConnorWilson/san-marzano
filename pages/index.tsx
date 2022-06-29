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
      <Nav />
      <Section position="relative" display="flex" justifyContent="center">
        <HeroGradient />
        <Box height={[400, 600]} flex="100%">
          <Hero />
        </Box>
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
  width: 100%
  display: grid;
  align-items: center;
  justify-content: center;
`;

const HeroGradient = styled.div`
  position: absolute;
  height: 100%;
  top: 0;

  background: linear-gradient(
    ${({ theme }) => theme.colors.black} 0%,
    transparent 25%,
    transparent 80%,
    ${({ theme }) => theme.colors.black} 100%
  );
  width: 100%;
`;

const Hero = styled.div`
  background-image: url("/Hero.jpeg");

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 100%;
`;
