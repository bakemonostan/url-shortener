import styled from 'styled-components';
import { customizable, brand, detailed } from 'images';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 6rem 4rem;
  gap: 5rem;
  @media (min-width: 1240px) {
    gap: 2rem;
  }
`;

const Cards = styled.div`
  align-self: ${(p) => (p.right ? 'start' : 'end')};
  background-color: white;
  position: relative;
  flex: 0 1 320px;
  padding: 5rem 1.5rem 1.5rem;
  border-radius: 8px;
  text-align: center;

  .icon {
    background-color: hsl(257, 27%, 26%);
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
  @media (min-width: 1240px) {
    flex: 0 0 350px;
    padding: 4rem 1.5rem 2.5rem;
    text-align: left;
    margin-top: ${(p) => (p.right ? '-1rem' : '0')};
    margin-bottom: ${(p) => (p.right ? '1rem' : '-2rem')};
  }
`;
const MiddleCard = styled(Cards)`
  align-self: center;
`;

const Info = styled.div`
  p {
    font-size: 0.8rem;
    padding: 1rem 0;
  }
  @media (min-width: 965px) {
    p {
      font-size: 1rem;
    }
  }
`;

const CardItem = ({ right, title, info, logo }) => {
  return (
    <Cards right={right}>
      <div className='icon'>
        <img src={logo} alt='brand icon' />
      </div>
      <Info>
        <h2>{title}</h2>
        <p>{info}</p>
      </Info>
    </Cards>
  );
};

const Card = () => {
  return (
    <CardWrapper>
      <CardItem
        right
        title='Brand Recognition'
        logo={brand}
        info="Boost your brand recognition with each click. Generic links don't 
        mean a thing. Branded links help instil confidence in your content."
      />
      <MiddleCard>
        <div className='icon'>
          <img src={detailed} alt='brand icon' />
        </div>
        <Info>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </Info>
      </MiddleCard>
      <CardItem
        title='Fully Customizable'
        info='Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.'
        logo={customizable}
      />
    </CardWrapper>
  );
};
export default Card;
