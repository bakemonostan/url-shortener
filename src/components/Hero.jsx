import styled from 'styled-components';
import { heroImg } from 'images';

const Wrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 375px;
  position: relative;
  padding: 0 2rem;

  @media (min-width: 965px) {
    flex-flow: row-reverse;
    max-width: 1440px;
    padding: 0 6rem;
    margin-bottom: 8rem;
  }
`;

const ImgWrapper = styled.div`
  @media (min-width: 965px) {
    position: relative;
    right: -100px;
  }
`;

export const HeroInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 300px;
  padding: 3rem 0;

  h1 {
    font-size: clamp(1.21rem, calc(0.27rem + 3.98vw), 3.86rem);
    line-height: 1.2;
    padding: 1rem 0;
  }
  p {
    font-size: clamp(0.87rem, calc(0.75rem + 0.5vw), 1.2rem);
    padding: 0 0 1rem;
  }

  @media (min-width: 965px) {
    text-align: left;
    width: 50%;
  } ;
`;

const HeroButton = styled.button`
  margin-top: 2rem;
  background-color: limegreen;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  @media (min-width: 965px) {
    margin-top: 1rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={heroImg} alt='' />
      </ImgWrapper>
      <HeroInfo>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <HeroButton>Get Started</HeroButton>
      </HeroInfo>
    </Wrapper>
  );
};
export default Hero;
