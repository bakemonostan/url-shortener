import styled from 'styled-components';
import { customizable, brand, detailed } from 'images';
import { HeroWrapper } from 'components/Hero';

const Wrapper = styled.div`
  background: white;
  position: relative;
  border-radius: 10px;
  padding-top: 4rem;
  margin-bottom: 6rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    background-color: rgba(60, 38, 105);
    border-radius: 50%;
    padding: 1rem;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -35px;
  }
`;
const MidWrapper = styled(Wrapper)``;

const Info = styled(HeroWrapper)`
  padding: 1rem;
  @media (min-width: 765px) {
  }
`;
const Card = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Card;
