import styled from 'styled-components';
import { heroImg } from 'images';
import InputBar from './common/InputBar';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 575px;
  margin: 0 auto 4rem;
  /* height: 80vh; */

  @media (min-width: 765px) {
    flex-direction: row-reverse;
    max-width: 2500px;
    width: 90%;
  }
`;

const ImgWrapper = styled.div`
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-position: 30px;
  background-size: 450px;
  padding: 150px;
  object-fit: cover;
  margin-bottom: 3rem;

  img {
    display: none;
  }

  @media (min-width: 765px) {
    padding: 0;
    background: none;
    width: 50%;

    img {
      display: block;
    }
  }
`;

const HeroWrapper = styled.div`
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
  h1 {
    font-size: 2.3rem;
    line-height: 1.2;
  }

  p {
    padding: 1rem 0.5rem;
    font-size: 1rem;
    color: gray;
    margin: 0 0 1rem;
  }
  @media (min-width: 765px) {
    max-width: 450px;
    text-align: left;
    margin: 7rem auto 0;

    h1 {
      font-size: 3.5rem;
    }
    p {
      padding: 0.5rem 0;
      font-size: 1.1rem;
      margin: 0 0 1.5rem;
      line-height: 1.8;
    }
  }
`;

const HeroButton = styled.button`
  background-color: limegreen;
  padding: 1rem;
  width: 180px;
  border-radius: 40px;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Hero = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={heroImg} alt='' />
      </ImgWrapper>
      <HeroWrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <HeroButton>Get Started</HeroButton>
      </HeroWrapper>
      <InputBar />
    </Wrapper>
  );
};
export default Hero;
