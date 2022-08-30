import styled from 'styled-components';
import { customizable, brand, detailed } from 'images';
import { HeroInfo } from 'components/Hero';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 6rem 4rem;
  gap: 5rem;
  @media (min-width: 1240px) {
    gap: 2rem;
    height: 55vh;
  }
`;

const Cards = styled.div`
  flex: 0 0 320px;
  background-color: ${(p) => (p.right ? 'pink' : 'white')};
  padding: 5rem 1.5rem 1.5rem;
  position: relative;
  align-self: ${(p) => (p.right ? 'start' : 'end')};
  border-radius: 8px;
  text-align: center;

  .icon {
    background-color: purple;
    width: 80px;
    height: 80px;
    padding: 1rem;
    border-radius: 100px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -35px;
  }
  @media (min-width: 1135px) {
    flex: 0 0 350px;
    padding: 4rem 1.5rem 2.5rem;
    text-align: left;
  }
`;
const MiddleCard = styled(Cards)`
  align-self: center;
`;

const Info = styled.div`
  p {
    font-size: 0.8rem;
  }
  @media (min-width: 965px) {
    p {
      font-size: 1rem;
    }
  }
`;

const CardItem = ({ right }) => {
  return (
    <Cards right={right}>
      <div className='icon'>
        <img src={brand} alt='brand icon' />
      </div>
      <Info>
        <h2>Brand Recognition</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </Info>
    </Cards>
  );
};

const Card = ({ right }) => {
  return (
    <CardWrapper>
      <CardItem right />
      <MiddleCard>
        <div className='icon'>
          <img src={brand} alt='brand icon' />
        </div>
        <Info>
          <h2>Brand Recognition</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </Info>
      </MiddleCard>
      <CardItem />
    </CardWrapper>
  );
};
export default Card;
