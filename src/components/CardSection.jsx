import styled from 'styled-components';
import Card from './common/Card';
import { HeroWrapper } from './Hero';

const Wrapper = styled.section`
  background-color: hsl(0, 0%, 90%);
  height: 100vh;
  padding-top: 10rem;

  @media (min-width: 765px) {
    padding-top: 2rem;
  }
`;

const Info = styled(HeroWrapper)`
  @media (min-width: 765px) {
    text-align: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
`;

const CardSection = () => {
  return (
    <Wrapper>
      <Info>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the wed with our advanced
          Statistics dashboard
        </p>
      </Info>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Wrapper>
  );
};
export default CardSection;
