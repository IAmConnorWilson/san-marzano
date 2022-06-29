import Image from "next/image";
import styled from "styled-components";
import Box from "../components/Box";
import Text from "../components/Text";
import Logo from "../public/LogoWhite.png";
import Home1 from "../public/Home1.jpeg";
import Nav from "../components/Nav";
// Added for symnatic
const Section = Box;

const Home = () => {
  return (
    <HomeWrapper>
      <Nav />
      <Section position="relative" display="flex" justifyContent="center">
        <HeroGradient />
        <Box height={[400, 400, 600, 700]} flex="100%">
          <Hero />
        </Box>
        <Box
          height={[400, 400, 600, 700]}
          width="100%"
          position="absolute"
          display="flex"
          justifyContent="center"
        >
          <Image
            src={Logo}
            alt="San Marzano Logo"
            objectFit="contain"
            width="550"
          />
        </Box>
      </Section>
      <Body>
        <ContentWrapper>
          <Section display="grid" gridTemplateColumns="4fr 3fr" py={32}>
            <Box pr={64} display="grid" alignContent="center">
              <Text family="garamondBold" size={48} mb={16}>
                Pasta Please
              </Text>
              <Text size={24} family="josefin" mb={16}>
                I know, you were promised there wouldn’t be any math, but stay
                with us:
              </Text>
              <Text size={24} family="josefin">
                Quality ingredients + homemade pasta + affordability =
                <br />
                <Text family="josefinBold" size={24}>
                  A real good time
                </Text>
              </Text>
            </Box>
            <Box>
              <Image src={Home1} alt="Pasta Photo" objectFit="contain" />
            </Box>
          </Section>
        </ContentWrapper>
      </Body>
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
    transparent 30%,
    transparent 80%,
    ${({ theme }) => theme.colors.black} 100%
  );

  /* background: linear-gradient(
    #c4c4c4 0%,
    rgba(196, 196, 196, 0.58) 52.87%,
    rgba(196, 196, 196, 0) 100%
  ); */

  width: 100%;
`;

const Hero = styled.div`
  background-image: url("/Hero.jpeg");

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;
`;
